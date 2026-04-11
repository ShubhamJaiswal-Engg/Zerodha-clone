const {Schema} = require("mongoose");

const OrdersSchema = new Schema({
    name: String,
    qty:Number,
    price: Number,
    mode:String,
    uid: String,
    time: Date,
})

module.exports = {OrdersSchema};