// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Add{
    uint x;
    function add(uint a, uint b) public {
        x = a+b;
    }
    function showSum() view public returns(uint){
        return x;
    }
}