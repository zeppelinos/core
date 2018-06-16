pragma solidity ^0.4.21;


import "zos-lib/contracts/migrations/Initializable.sol";


contract MyContractV1 is Initializable {
  uint256 public x;

  function initialize(uint256 _value) isInitializer public {
    value = _value;
  }

  function add(uint256 _value) public {
    value = value + _value;
  }
}
