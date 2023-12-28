// Initial total
let total = 0;

function updateTotal() {
  // Calculate total based on quantity and prices
  const items = document.querySelectorAll('.cart-item');
  total = Array.from(items).reduce((acc, item) => {
    const quantity = parseInt(item.querySelector('.quantity').innerText);
    const price = parseInt(item.querySelector('.price').innerText.slice(1));
    return acc + quantity * price;
  }, 0);
  document.getElementById('total').innerText = total;
}

function increment(itemId) {
  const quantityElement = document.getElementById('quantity' + itemId.slice(-1));
  const currentQuantity = parseInt(quantityElement.innerText);
  quantityElement.innerText = currentQuantity + 1;
  updateTotal();
}

function decrement(itemId) {
  const quantityElement = document.getElementById('quantity' + itemId.slice(-1));
  const currentQuantity = parseInt(quantityElement.innerText);
  if (currentQuantity > 0) {
    quantityElement.innerText = currentQuantity - 1;
    updateTotal();
  }
}

function toggleLike(itemId) {
  const heartElement = document.getElementById(itemId).getElementsByClassName('heart')[0];
  heartElement.style.color = (heartElement.style.color === 'red') ? 'grey' : 'red';
}

function removeItem(itemId) {
  const itemElement = document.getElementById(itemId);
  itemElement.parentNode.removeChild(itemElement);
  updateTotal();
}

// Add initial items to the cart
document.getElementById('cart').innerHTML = `
  <div class="cart-item" id="item1">
    <span>Item 1</span>
    <button onclick="decrement('item1')">-</button>
    <span class="quantity" id="quantity1">1</span>
    <button onclick="increment('item1')">+</button>
    <span class="price">$10</span>
    <span class="heart" onclick="toggleLike('item1')">❤️</span>
    <button onclick="removeItem('item1')">Remove</button>
  </div>

  <div class="cart-item" id="item2">
    <span>Item 2</span>
    <button onclick="decrement('item2')">-</button>
    <span class="quantity" id="quantity2">1</span>
    <button onclick="increment('item2')">+</button>
    <span class="price">$15</span>
    <span class="heart" onclick="toggleLike('item2')">❤️</span>
    <button onclick="removeItem('item2')">Remove</button>
  </div>
`;

// Update total initially
updateTotal();
