// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

/**
 * @title FiatBackedToken
 * @dev ERC20 token backed 1:1 by a USD stablecoin (e.g. USDC/USDT) on Mantle.
 * Only accounts with MINTER_BURNER_ROLE can mint or burn tokens.
 * Tokens are minted when fiat is deposited (and stablecoins are escrowed),
 * and burned when fiat is spent (stablecoins are sent to treasury).
 */
 
contract FiatBackedToken is ERC20, AccessControl {
    using SafeERC20 for IERC20;
    
    bytes32 public constant MINTER_BURNER_ROLE = keccak256("MINTER_BURNER_ROLE");
    IERC20 public immutable stablecoin; // e.g., USDC/USDT
    address public treasury; // Holds the stablecoins

    event TreasuryChanged(address indexed oldTreasury, address indexed newTreasury);
    event StablecoinSwept(address indexed to, uint256 amount);
    event TokensMinted(address indexed to, uint256 amount);
    event TokensBurned(address indexed from, uint256 amount);

    constructor(
        address _stablecoin,
        address _treasury,
        address admin
    ) ERC20("FiatBackedToken", "FIAT") {
        require(_stablecoin != address(0), "Stablecoin address required");
        require(_treasury != address(0), "Treasury address required");
        require(admin != address(0), "Admin address required");
        
        stablecoin = IERC20(_stablecoin);
        treasury = _treasury;
        
        // Configuración inicial de roles
        _grantRole(DEFAULT_ADMIN_ROLE, admin);
        _grantRole(MINTER_BURNER_ROLE, admin);
    }

    /**
     * @dev Mint FIAT tokens to a user, must transfer equivalent stablecoin from treasury first.
     * @param to Address to receive the minted tokens
     * @param amount Amount of tokens to mint
     */
    function mint(address to, uint256 amount) external onlyRole(MINTER_BURNER_ROLE) {
        require(to != address(0), "Mint to zero address");
        require(amount > 0, "Amount must be positive");
        
        uint256 treasuryBalance = stablecoin.balanceOf(treasury);
        uint256 allowance = stablecoin.allowance(treasury, address(this));
        require(treasuryBalance >= amount, "Insufficient stablecoin backing");
        require(allowance >= amount, "Insufficient allowance");
        
        stablecoin.safeTransferFrom(treasury, address(this), amount);
        _mint(to, amount);
        
        emit TokensMinted(to, amount);
    }

    /**
     * @dev Burn FIAT tokens from a user, and send equivalent stablecoin back to treasury.
     * @param from Address to burn tokens from
     * @param amount Amount of tokens to burn
     */
    function burn(address from, uint256 amount) external onlyRole(MINTER_BURNER_ROLE) {
        require(from != address(0), "Burn from zero address");
        require(amount > 0, "Amount must be positive");
        
        _burn(from, amount);
        stablecoin.safeTransfer(treasury, amount);
        
        emit TokensBurned(from, amount);
    }

    /**
     * @dev Change the treasury address (admin only).
     * @param newTreasury New treasury address
     */
    function setTreasury(address newTreasury) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(newTreasury != address(0), "Invalid treasury address");
        emit TreasuryChanged(treasury, newTreasury);
        treasury = newTreasury;
    }

    /**
     * @dev Emergency: Sweep stablecoins from contract to another address (admin only).
     * @param to Address to send the stablecoins
     * @param amount Amount to transfer
     */
    function emergencySweepStablecoin(address to, uint256 amount) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(to != address(0), "Invalid address");
        uint256 balance = stablecoin.balanceOf(address(this));
        require(balance >= amount, "Insufficient balance");
        
        stablecoin.safeTransfer(to, amount);
        emit StablecoinSwept(to, amount);
    }

    /**
     * @dev Get the stablecoin balance backing this token
     * @return uint256 Balance of stablecoins held by this contract
     */
    function getStablecoinBacking() external view returns (uint256) {
        return stablecoin.balanceOf(address(this));
    }
}
