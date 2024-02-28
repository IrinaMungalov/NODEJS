// main module
import ui from './modules/ui.mjs'
import data from './modules/data.mjs'




ui.renderCatalog(data.products, (n, product, q) => {
  console.log(n, product, q)
  // HW4:
  // each time the user confirms 
  // add a { n, product, q } -----> cart.items
  const newItem = { n, product, q }
  data.cart.items.push(newItem)

  console.log( "The product added to the cart:", newItem )
})