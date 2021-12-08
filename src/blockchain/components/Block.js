class Block {
  constructor() {
    this.index = 0
    this.nonce = 0
    this.hash = ''
    this.previousHash = ''
    this.transactions = []
    this.timestamp = Date.now
  }

  get key() {
    return (
      this.index +
      this.nonce +
      this.previousHash +
      JSON.stringify(this.transactions)
    )
  }

  addTransactions(transactions) {
    transactions.list.forEach(transaction => {
      this.transactions.push(transaction)
    })
    
    transactions.reset()
  }
}

export default Block
