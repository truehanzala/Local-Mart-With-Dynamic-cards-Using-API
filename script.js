// Wait until the HTML page has fully loaded
document.addEventListener('DOMContentLoaded', loadProducts);

async function loadProducts() {
  try {
    // Get product data from the API
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const products = data.products;

    // Find the container where we’ll show the products
    const container = document.getElementById('products');

    // Go through each product and add it to the page
    products.forEach(product => {
      const cardHTML = `
        <div class="product-card">
          <img src="${product.thumbnail}" alt="${product.title}">
          <div class="product-info">
            <h3>${product.title}</h3>
            <p>${product.description.substring(0, 50)}...</p>
            <p class="price">$${product.price}</p>
          </div>
        </div>
      `;
      container.innerHTML += cardHTML;
    });
  } catch (error) {
    console.error('Could not load products:', error);
  }
}
