const cartItemsEl = document.getElementById('cart-items');
const totalEl = document.getElementById('total');
const checkoutBtn = document.getElementById('checkout');

let cart = [];

function updateCart() {
  cartItemsEl.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = ${item.name} - ${item.price} so‘m (x${item.quantity});
    cartItemsEl.appendChild(li);
    total += item.price * item.quantity;
  });

  totalEl.textContent = total;
}

function addToCart(product) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCart();
}

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', e => {
    const productEl = e.target.closest('.product');
    const product = {
      id: productEl.dataset.id,
      name: productEl.dataset.name,
      price: parseInt(productEl.dataset.price, 10),
    };
    addToCart(product);
  });
});

checkoutBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Savatcha bo‘sh!');
    return;
  }
  alert('Buyurtmangiz qabul qilindi. Rahmat!');
  cart = [];
  updateCart();
});