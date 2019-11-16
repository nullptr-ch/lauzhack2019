let Test = artifacts.require("Test");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(Test);
};