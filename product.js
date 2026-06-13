// console.log("product.js loaded");

// https://fakestoreapi.com/products

const fetchProducts = async () => {
  const products = await fetch("https://fakestoreapi.com/products");
  const productsData = await products.json();
  mapProducts(productsData);
};

fetchProducts();

let productsSection = document.getElementById("productsSection");

const mapProducts = (productsData) => {
  for (let i = 0; i < productsData.length; i++) {
    productsSection.innerHTML += `
  <div class="products-card">
        <div class="card-header"></div>

        <div class="card-body">
		<h2 class="title">${productsData[i].title}</h2>
		<img class="image" src="${productsData[i].image}">

        	<p class="category">${productsData[i].category}</p>

		<p class="price">${productsData[i].price}</p>

		<div class="rate">
              		<h3>${productsData[i].rating.rate}</h3>
             		<p>${productsData[i].rating.count}</p>
            	</div>

          	<a href="#" class="btn">View</a>
        </div>
      </div>`;
  }
};