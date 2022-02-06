// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Ownable {
  address public owner;

  constructor() {
    owner = msg.sender;
  }
}
