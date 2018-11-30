/** 
*  Customer model
*  Describes the characteristics of each attribute in a customer resource.
*
* @author PEDDI,TARAKA RAVITEJA<pedditarakaraviteja@gmail.com>
*
*/

// bring in mongoose 
// see <https://mongoosejs.com/> for more information
const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({

  _id: { type: Number, required: true },
  email: {
    type: String,
    required: true,
    unique: true
  },
  Firstname: {
    type: String,
    required: true,
    default: 'first'
  },
  Lastname: {
    type: String,
    required: true,
    default: 'last'
  },
  street1: {
    type: String,
    required: true,
    default: 'Street 1'
  },
  street2: {
    type: String,
    required: false,
    default: ''
  },
  city: {
    type: String,
    required: true,
    default: 'Maryville'
  },
  state: {
    type: String,
    required: true,
    default: 'MO'
  },
  zip: {
    type: String,
    required: true,
    default: '64468'
  },
  country: {
    type: String,
    required: true,
    default: 'USA'
  }
  


})
module.exports = mongoose.model('Customer', CustomerSchema)