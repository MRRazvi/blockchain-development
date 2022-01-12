import sha256 from "sha256";

class Blockchain {
  constructor() {
    this.chain = [];
    this.pendingTransactions = [];
  }

  // set new block
  setBlock(nonce, previousBlockHash, hash) {
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

  // get latest/last block
  getBlock(index = this.chain.length - 1) {
    return this.chain[index];
  }

  // create new pending transaction
  setTransaction(amount, sender, recipient) {
    const transaction = {
      value: amount,
      from: sender,
      to: recipient,
      block: this.getBlock()["index"] + 1,
      timestamp: Date.now(),
    };

    this.pendingTransactions.push(transaction);
    return transaction;
  }

  // hash the whole block data
  hashBlock(previousHash, data, nonce) {
    return sha256(data + nonce.toString() + JSON.stringify(previousHash));
  }

  proofOfWork(previousHash, data) {
    let nonce = 0;
    let hash = this.hashBlock(previousHash, data, nonce);
    while (hash.substring(0, 4) !== "0000") {
      nonce++;
      hash = this.hashBlock(previousHash, data, nonce);
    }
    return nonce;
  }
}

export default Blockchain;
