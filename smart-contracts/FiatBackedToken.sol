// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @title FiatBackedToken
 * @dev ERC20 token backed 1:1 by a USD stablecoin (e.g. USDC/USDT) on Mantle.
 * Only accounts with MINTER_BURNER_ROLE can mint or burn tokens.
 * Tokens are minted when fiat is deposited (and stablecoins are escrowed),
 * and burned when fiat is spent (stablecoins are sent to burn address).
 */
contract FiatBackedToken is ERC20, AccessControl {
    bytes32 public constant MINTER_BURNER_ROLE = keccak256("MINTER_BURNER_ROLE");
    IERC20 public immutable stablecoin; // e.g., USDC/USDT
    address public treasury; // Holds the stablecoins

    event TreasuryChanged(address indexed oldTreasury, address indexed newTreasury);
    event StablecoinSwept(address indexed to, uint256 amount);

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
        _setupRole(DEFAULT_ADMIN_ROLE, admin);
        _setupRole(MINTER_BURNER_ROLE, admin);
    }

    /**
     * @dev Mint FIAT tokens to a user, must transfer equivalent stablecoin from treasury first.
     */
    function mint(address to, uint256 amount) external onlyRole(MINTER_BURNER_ROLE) {
        require(stablecoin.balanceOf(treasury) >= amount, "Insufficient stablecoin backing");
        _mint(to, amount);
    }

    /**
     * @dev Burn FIAT tokens from a user, and burn equivalent stablecoin from treasury.
     */
    function burn(address from, uint256 amount) external onlyRole(MINTER_BURNER_ROLE) {
        _burn(from, amount);
        require(stablecoin.transferFrom(treasury, address(0), amount), "Stablecoin burn failed");
    }

    /**
     * @dev Change the treasury address (admin only).
     */
    function setTreasury(address newTreasury) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(newTreasury != address(0), "Invalid treasury address");
        emit TreasuryChanged(treasury, newTreasury);
        treasury = newTreasury;
    }

    /**
     * @dev Emergency: Sweep stablecoins from treasury to another address (admin only).
     */
    function emergencySweepStablecoin(address to, uint256 amount) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(to != address(0), "Invalid address");
        require(stablecoin.transferFrom(treasury, to, amount), "Sweep failed");
        emit StablecoinSwept(to, amount);
    }
}
