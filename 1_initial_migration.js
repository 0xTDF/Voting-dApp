const Migrations = artifacts.require("Migrations");
const twoChoiceVote = artifacts.require("twoChoiceVote");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(twoChoiceVote);
};
