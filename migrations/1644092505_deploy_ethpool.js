const ETHPoolContract = artifacts.require("ETHPool")

module.exports = function(_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(ETHPoolContract);
};
