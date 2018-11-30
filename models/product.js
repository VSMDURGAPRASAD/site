//product info
var mongoose=require('mongoose');

const ProductSchema = new mongoose.Schema({

    _id: 
    { type: Number, 
    required: true },
    productKey: {
      type: String,
      required: true,
      unique: true,
      default: 'product'
    },
    
    pricePerUnit: {
      type: Number,
      required: true,
      default: 9.99,
      min: 0,
      max: 100000
    },
    quantity: {
        type:Number,
        required:true,
        min:0,
        max:500
    },
    productdescription: {
        type: String,
        required: false,
        default: 'description'
      },
    // discount: {
    //     type:Number,
    //     required:false,
    //     min:0,
    //     max :85
    // },
    ratings: {
        type:Number,
        required:true,
        min:0,
        max:5
    },
    productAssurance: {
        type:String,
        default:"Guarentee",
    },
    manufactureddate:{
        type:String,
        required:false,
        default: ''
        

    },
     expirydate:{
        type:String,
        required:false,
        default: ''
           
  }
})
  module.exports = mongoose.model('Product', ProductSchema)
  //product info