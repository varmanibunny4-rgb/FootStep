const cart = [];

function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  renderCart();
}

function updateQuantity(name, change) {
  const item = cart.find(product => product.name === name);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      const index = cart.indexOf(item);
      cart.splice(index, 1); // remove item
    }
  }
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');

    li.innerHTML = `
      ${item.name} - ₹${item.price} x ${item.quantity}
      <span class="quantity-controls">
        <button onclick="updateQuantity('${item.name}', 1)">+</button>
        <button onclick="updateQuantity('${item.name}', -1)">-</button>
      </span>
    `;

    cartItems.appendChild(li);
    total += item.price * item.quantity;
  });

  cartTotal.textContent = total;
}
/*footer linking to watsapp and instagram */

  // Redirect to Instagram
  document.getElementById('instagram-link').addEventListener('click', function(event) {
    event.preventDefault(); // prevent default anchor behavior
    window.open('https://www.instagram.com/_n_a_n_i__xo?igsh=ZGU1Z2FmMXVtbnhn', '_blank');
  });

  // Redirect to WhatsApp
  document.getElementById('whatsapp-link').addEventListener('click', function(event) {
    event.preventDefault();
    window.open('https://wa.me/917702413623', '_blank'); // '91' is the country code for India
  });



