const filter = document.getElementById('filter');
const productsContainer = document.getElementById('products');

// Fetch products from API
async function getProducts() {
  const res = await fetch(`http://localhost:3000/products`);

  const data = await res.json();

  return data;
}

//  Show products in DOM
async function showProducts() {
  const products = await getProducts();

  products.forEach(product => {
    const productEl = document.createElement('div');
    productEl.classList.add('product')
    productEl.innerHTML = `
    <div class="bg">
       <a href="${product.image}"> <img src="${product.image}" alt="" srcset=""> </a> 
    </div>

    <h4 class="product-title">${product.title}</h4>

    <div class="location-small">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 0C2.8515 0 0 2.55225 0 5.7015C0 10.3837 4.78275 10.8787 6 18C7.21725 10.8787 12 10.3837 12 5.7015C12 2.55225 9.14925 0 6 0ZM6 8.25C4.75725 8.25 3.75 7.24275 3.75 6C3.75 4.75725 4.7565 3.75 6 3.75C7.2435 3.75 8.25 4.75725 8.25 6C8.25 7.24275 7.24275 8.25 6 8.25Z"
          fill="#1D1D1F" fill-opacity="0.8" />
      </svg> <span class="product-location"> ${product.location} </span>
    </div>
    <div class="price">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 12.1245C12 9.47775 9.40885 8.403 6.85714 7.43325V3.9435C8.07428 3.9825 9.3 4.28325 10.4229 4.629L11.0443 2.15775C9.48942 1.7445 8.09742 1.5555 6.85714 1.527V0H5.14285V1.6005C1.80771 2.00175 0.0265715 3.83175 0.0265715 5.8755C0.0265715 8.76825 3.07628 9.72 5.14285 10.3148V13.8488C3.68057 13.8345 2.064 13.3837 0.779142 12.9473L0 15.4132C1.53171 16.1055 3.36943 16.476 5.14285 16.503V18H6.85714V16.4212C9.696 16.0732 12.0043 14.7015 12 12.1245ZM5.14285 4.14225V6.75375C3.762 6.063 3.70457 4.6755 5.14285 4.14225ZM6.85714 13.593V10.8997C8.43514 11.6985 8.23285 13.0478 6.85714 13.593Z"
          fill="#1D1D1F" fill-opacity="0.8" />
      </svg><span class="product-price"> ${product.price}</span>
    </div>
    `
    productsContainer.appendChild(productEl);

  });
}

// Filter products by input
function filterProducts(e) {

  const term = e.target.value.toUpperCase().trim();
  const products = document.querySelectorAll('.product');

  products.forEach(product => {
    const title = product.querySelector('.product-title').innerText.toUpperCase();
    const location = product.querySelector('.product-location').innerText.toUpperCase();
    const price = product.querySelector('.product-price').innerText.toUpperCase();

    if (title.indexOf(term) > -1 || location.indexOf(term) > -1 || price.indexOf(term) > -1) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }

  });

}

filter.addEventListener('input', filterProducts)




showProducts()