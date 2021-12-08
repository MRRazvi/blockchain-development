class Transaction {
  constructor(_from, _to, _amount) {
    if (!_from || !_to || !_amount || isNaN(_amount)) {
      throw new Error('Invalid data')
    }
    
    this.from = _from;
    this.to = _to;
    this.amount = _amount;
    this.timestamp = Date.now
  }
}

export default Transaction
