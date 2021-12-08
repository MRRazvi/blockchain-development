import Transaction from './Transaction'

class Transactions {
  constructor() {
    this.list = []
  }

  add(req, res) {
    let response = ''

    try {
      let tx = new Transaction(
        req.body.from,
        req.body.to,
        req.body.amount
      )

      this.list.push(tx)
      response = {
        success: 1
      }
    } catch(e) {
      res.status(400)
      response = {
        error: 400,
        message: e.message
      }
    }

    res.json(response)
  }

  get() {
    return this.list
  }

  reset() {
    this.list = []
  }
}

export default Transactions
