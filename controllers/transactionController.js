//@desc get all transactions
//@route /api/v1/transactions
//@access Public
exports.getTransactions = (req, res, next) => {
    res.send('GET transactions')
}

//@desc Add transactions
//@route POST /api/v1/transactions
//@access Public
exports.addTransactions = (req, res, next) => {
    res.send('POST transactions')
}

//@desc DELETE transactions
//@route DELETE /api/v1/transactions/:id
//@access Public
exports.deleteTransactions = (req, res, next) => {
    res.send('DELETE transactions')
}