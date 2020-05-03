const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
    text:{
        type:String,
        trim: true,
        required: [true, 'Please add text']
    },
    amount:{
        type: Number,
        required: [true,  'Please add postive or negative number']
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Transaction', TransactionSchema)