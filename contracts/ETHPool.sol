// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract ETHPool {

  // Contract name
  string private _name = "ETH Pool"; 

  constructor() {
  }

  function name() public view virtual returns (string memory) {
        return _name;
  }
}
