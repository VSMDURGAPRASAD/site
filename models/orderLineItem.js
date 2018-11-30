

const mongoose = require('mongoose')

const OrderLineItemSchema = new mongoose.Schema({

  _id: { type: Number,
   
    required: true },
  orderID: {
     type: Number,
     
      required: true },
    
    
  lineNumber: {
    type: Number,
    min:0,
    max:10000,
    required: true
  },
  productKey: {
    type: String,

    required: true
  },
  quantity: {
    type: Number,
    min:0,
    max:10000,
    required: true, 
    default: 1
  }
  

})
module.exports = mongoose.model('orderLineitem', OrderLineItemSchema)
