// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;


import "./ModifiedERC20.sol";

contract Decoin is ModifiedERC20 {

    constructor () ModifiedERC20("Decoin","DEC"){
        _mint(msg.sender, 10 * 10 ** decimals());
    }
}