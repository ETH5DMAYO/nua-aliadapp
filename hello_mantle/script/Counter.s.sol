// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {FiatBackedToken} from "../src/Counter.sol";

contract CounterScript is Script {
    FiatBackedToken public fiatBackedToken;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        fiatBackedToken = new FiatBackedToken(msg.sender);

        vm.stopBroadcast();
    }
}
