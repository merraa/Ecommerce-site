document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const imgSrc = urlParams.get('img');
  console.log(imgSrc)
  const name = urlParams.get('name');
  const price = urlParams.get('price');

  if (imgSrc && name && price) {
    document.getElementById('product-image').src = imgSrc;
    document.getElementById('product-name').textContent = name;
    document.getElementById('product-price').textContent = `${price}`;
  }

  document.getElementById('order-form').addEventListener('submit', event => {
    event.preventDefault();
    // Here you would handle the order submission (e.g., send the order to a server)
    alert('Order placed successfully!');
  });
});
