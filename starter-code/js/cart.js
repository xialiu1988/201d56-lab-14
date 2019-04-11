/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
// var tableBody = document.getElementsByTagName('tbody');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
var mainEl=document.getElementById('cart').childNodes[3];
while (mainEl.firstChild) {
  mainEl.removeChild(mainEl.firstChild);
}
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
   var tbbEL=document.getElementById('cart').childNodes[3];
    for(var i=0; i < cart.items.length; i++){ 
      var tableRow = document.createElement('tr');
      var tableDataProduct = document.createElement('td');
      var newlink=document.createElement('a');
      newlink.setAttribute('href','');
      newlink.id=cart.items[i].product
      newlink.innerHTML='X';
      tableRow.appendChild(newlink);
      tableDataProduct.textContent =cart.items[i].product;

      var quantityD=document.createElement('td');
      quantityD.textContent=cart.items[i].quantity;
      
      tableRow.appendChild(tableDataProduct);
      tableRow.appendChild(quantityD);
      tbbEL.appendChild(tableRow);    
    }

}

function removeItemFromCart(event) {

  event.preventDefault();

  // TODO: DONE - When a delete link is clicked, use cart.removeItem to remove the correct item
  var deleteItem = event.target.id;
  console.log(event.target.id);
  cart.removeItem(deleteItem);
  // TODO: DONE - Save the cart back to local storage
  cart.saveToLocalStorage();
  // TODO: DONE - Re-draw the cart table
  renderCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
