require('@nomiclabs/hardhat-waffle');

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    polygon: {
      url: `${process.env.POLYGON_URL}`,
      accounts: [],
    },
    polygon_testnet: {
      url: `${process.env.POLYGON_URL}`,
      accounts: [],
    },
  },
  solidity: '0.8.4',
};
