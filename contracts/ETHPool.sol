// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./Ownable.sol";

contract ETHPool is Ownable{

  // Contract name
  string public name; 

  constructor() {
    name = "ETH Pool";
  }

  function depositFunds() public {}

  function depositRewards() public {}

  function withdrawFunds() public {}
}
