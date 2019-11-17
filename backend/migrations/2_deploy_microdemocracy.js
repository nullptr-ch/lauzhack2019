let Microdemocracy = artifacts.require("Microdemocracy");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(Microdemocracy);
};