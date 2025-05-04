// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {FiatBackedToken} from "../src/Counter.sol";

contract FiatBackedTokenTest is Test {
    FiatBackedToken public token;
    address owner = address(0x123);
    address minter = address(0x456);
    address stablecoin = address(0x789);

    function setUp() public {
        token = new FiatBackedToken(owner);
    }

    function testInitialOwner() public {
        assertEq(token.owner(), owner);
    }

    function testSetStablecoin() public {
        vm.prank(owner);
        token.setStablecoin(stablecoin);
        assertEq(address(token.stablecoin()), stablecoin);
    }

    function testSetMinter() public {
        vm.prank(owner);
        token.setMinter(minter);
        assertEq(token.minter(), minter);
    }
}

