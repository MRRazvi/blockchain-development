import { ethers } from 'ethers';

class Web3 {
  constructor(provider) {
    if (provider) this.provider = new ethers.providers.Web3Provider(provider);
    this.provider = new ethers.providers.Web3Provider(window.ethereum);
  }

  getAccounts = async () => {
    return await this.provider.listAccounts();
  };

  getBlockNumber = async () => {
    return await this.provider.getBlockNumber();
  };

  getAccountBalance = async (account, format = 'ETH') => {
    const balance = await this.provider.getBalance(account);
    return this.convertToEther(balance);
  };

  getBlock = async (blockNumber) => {
    return await this.provider.getBlock(blockNumber);
  };

  getTransaction = async (txHash) => {
    return await this.provider.getTransaction(txHash);
  };

  convertToEther = (amount) => {
    return ethers.utils.formatEther(amount);
  };
}

export default new Web3();
