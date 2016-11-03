var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart
}

function addToCart(item) {
  var itemObj = {}
  itemObj[item] = Math.floor(Math.random()*100)
  cart.push(itemObj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length > 0) {
    var returnString = "In your cart, you have "
    for (var i = 0; i < cart.length; i++) {
      var nameItem = Object.keys(cart[i])[0]
      var priceItem = cart[i][nameItem]
      returnString += `${nameItem} at $${priceItem}`
      if (i < cart.length-1 ) {
        returnString += ", "
      }else{
        returnString += "."
      }
    }
    console.log(returnString)
  }else{
    console.log("Your shopping cart is empty.")
  }
}

function removeFromCart(itemName) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(itemName)) {
      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(creditCard) {
  if (!creditCard) {
    console.log("We don't have a credit card on file for you to place your order.")
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`)
    cart = []
  }
}
