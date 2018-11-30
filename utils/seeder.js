// set up a temporary (in memory) database
const Datastore = require('nedb')
const LOG = require('../utils/logger.js')
const products = require('../data/product.json')
const orders = require('../data/order.json')
const customers = require('../data/customer.json')
const orderLineItems = require('../data/orderLineItems.json')

module.exports = (app) => {
  LOG.info('START seeder.')
  const db = {}

  db.products = new Datastore()
  db.products.loadDatabase()

  // insert the sample data into our data store
  db.products.insert(products)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.products = db.products.find(products)
  LOG.debug(`${app.locals.products.query.length} products seeded`)

  //creating order datastore
  db.orders = new Datastore()
  db.orders.loadDatabase()

  // insert the sample data into our data store
  db.orders.insert(orders)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.orders = db.orders.find(orders)
  LOG.debug(`${app.locals.orders.query.length} orders seeded`)

  // Creating customer datastore
  db.customers = new Datastore()
  db.customers.loadDatabase()

  // Insert customer data
  db.customers.insert(customers)

  // initialize app.locals, count customers
  app.locals.customers = db.customers.find(customers)
  LOG.debug(`${app.locals.customers.query.length} customers seeded`)
  
  //creating orderLineItems datastore
  db.orderLineItems = new Datastore()
  db.orderLineItems.loadDatabase()

  //Insert orderLineItems data
  db.orderLineItems.insert(orderLineItems)

  //  initialize app.locals
  app.locals.orderLineItems = db.orderLineItems.find(orderLineItems)
  LOG.debug(`${app.locals.orderLineItems.query.length} Order Line seeded`)

  LOG.info('END Seeder. Sample data read and verified.');


}