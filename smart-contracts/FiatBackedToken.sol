// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
/**
 * @title FiatBackedToken (AliadaUSD)
 * @dev ERC20 token backed 1:1 by a USD stablecoin (e.g., USDT/USDC) on Mantle.
 *      Only authorized minters (e.g., backend, bridge) can mint/burn tokens based on fiat/card activity.
 *      Users interact with AliadaUSD as if with fiat, while the contract holds stablecoins as collateral.
 */
contract FiatBackedToken is ERC20, Ownable {
    IERC20 public stablecoin; // USDT or USDC contract
    address public minter; // Backend/bridge address
    event StablecoinAddressUpdated(address indexed newStablecoin);
    event MinterUpdated(address indexed newMinter);
    event Minted(address indexed to, uint256 amount);
    event Burned(address indexed from, uint256 amount);
    event StablecoinWithdrawn(address indexed to, uint256 amount);
    modifier onlyMinter() {
        require(msg.sender == minter, "Not authorized");
        _;
    }
    constructor(address initialOwner) ERC20("Aliada USD", "aUSD") Ownable(initialOwner) {
        stablecoin = IERC20(address(0));
        minter = address(0);
    }
    // Admin can update the stablecoin (e.g., USDT/USDC) contract address
    function setStablecoin(address _stablecoin) external onlyOwner {
        stablecoin = IERC20(_stablecoin);
        emit StablecoinAddressUpdated(_stablecoin);
    }
    // Admin can update the minter address
    function setMinter(address _minter) external onlyOwner {
        minter = _minter;
        emit MinterUpdated(_minter);
    }
    /**
     * @dev Mint AliadaUSD to user when stablecoin is deposited (off-chain or via backend)
     * @param to The user address
     * @param amount The amount to mint (must match stablecoin received)
     */
    function mint(address to, uint256 amount) external onlyMinter {
        require(address(stablecoin) != address(0), "Stablecoin not set");
        require(minter != address(0), "Minter not set");
        _mint(to, amount);
        emit Minted(to, amount);
    }
    /**
     * @dev Burn AliadaUSD from user when they redeem fiat (off-chain or via backend)
     * @param from The user address
     * @param amount The amount to burn (must match stablecoin sent out)
     */
    function burn(address from, uint256 amount) external onlyMinter {
        require(address(stablecoin) != address(0), "Stablecoin not set");
        require(minter != address(0), "Minter not set");
        _burn(from, amount);
        emit Burned(from, amount);
    }
    /**
     * @dev Withdraw stablecoin collateral (for off-ramping, admin only)
     * @param to The recipient address
     * @param amount The amount to withdraw
     */
    function withdrawStablecoin(address to, uint256 amount) external onlyOwner {
        require(stablecoin.transfer(to, amount), "Stablecoin transfer failed");
        emit StablecoinWithdrawn(to, amount);
    }
    // Users can check their aUSD balance as with any ERC20 token
}
