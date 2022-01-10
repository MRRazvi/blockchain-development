class Blockchain {
  constructor() {
    this.chain = [];
    this.pendingTransactions = [];
  }

  createBlock(nonce, previousBlockHash, hash) {
    const block = {
      index: this.chain.length + 1,
      timestamp: Date.now(),
      transactions: this.pendingTransactions,
      nonce,
      hash,
      previousBlockHash,
    };

    this.pendingTransactions = [];
    this.chain.push(block);
    return block;
  }
}
