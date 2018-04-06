pragma solidity ^0.4.21;

interface ImplementationProvider {
  function getImplementation(string distribution, string version, string contractName) public view returns (address);
}
