const products = [];
const favoriteProducts = getItemStorage("favorite") || [];

function startProductListing(limitItems) {
    getProducts(limitItems)
      .then((newProducts) => {
        salveProducts(newProducts);
        listProducts();
      })
      .catch((error) => console.log(error.message));
}

function listProducts() {

    const productsList = document.querySelector("[data-list-products]");

    productsList.innerHTML = "";

    const templateProducts = createProducts(products);

    productsList.innerHTML = templateProducts;
}

function salveProducts(newProducts) {
    products.push(...newProducts);
}

async function getProducts(limitItems = false) {

  let response;
  
  limitItems
    ? (response = await fetch(`http://localhost:3002/products?_limit=${limitItems}`))
    : (response = await fetch("http://localhost:3002/products"));

  if (!response.ok) {
    throw new Error("Erro ao buscar os dados: requisição falhou.");
  }

  const products = await response.json();
  return products;
}

function setItemStorage(name, item) {
  localStorage.setItem(name, JSON.stringify(item));
}

function getItemStorage(name) {
  return JSON.parse(localStorage.getItem(name));
}