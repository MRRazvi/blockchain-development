const Migrations = artifacts.require("TecHouse");
const TecHouse = artifacts.require('TecHouse')

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(TecHouse);
};
