const Transaction = require('../models/Transaction')

//@desc get all transactions
//@route /api/v1/transactions
//@access Public
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

//@desc Add transactions
//@route POST /api/v1/transactions
//@access Public
exports.addTransactions = async (req, res, next) => {
    res.send('POST transactions')
}

//@desc DELETE transactions
//@route DELETE /api/v1/transactions/:id
//@access Public
exports.deleteTransactions = async (req, res, next) => {
    res.send('DELETE transactions')
}