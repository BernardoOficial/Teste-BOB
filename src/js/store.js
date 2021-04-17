const productBagId = getItemStorage("bag") || [];

const listFavorite = document.querySelector(".main__list-favorite");

let urlIds = "";
productBagId.forEach(productId => urlIds += `id=${productId}&`)
urlIds = urlIds.slice(0, -1);

getProducts(false, urlIds)
  .then((favoriteProduct) => {
      
    listFavorite.innerHTML = createProducts(favoriteProduct);
  })
  .catch((error) => console.log(error.message));

productBagId.length >= 1 
    ?   setTimeout(initClass, 1000)
    :   null

function bag(event) {
    event.stopPropagation();

    const iconFather = event.target.parentNode;

    addToBag(iconFather);

    const isItemBag = [...iconFather.classList].includes("item-bag");

    isItemBag
        ? iconFather.classList.remove('item-bag')
        : iconFather.classList.add('item-bag')
}

function initClass() {

    productBagId.forEach(productId => {

        const currentElement = document.querySelector(`[data-product="${productId}"]`);
        const isItemBag = [...currentElement.classList].includes("item-bag");

        isItemBag
          ? currentElement.classList.remove("item-bag")
          : currentElement.classList.add("item-bag");
    })
}

function addToBag(iconFather) {

    const productNumber = iconFather.dataset.product;

    const isFound = productBagId.findIndex(productId => productId === productNumber);

    if(isFound <= -1) {
        productBagId.push(productNumber);
    }
    else {
        productBagId.splice(isFound, 1);
    }

    setItemStorage('bag', productBagId);
}

function setItemStorage(name, item) {
  localStorage.setItem(name, JSON.stringify(item));
}

function getItemStorage(name) {
  return JSON.parse(localStorage.getItem(name));
}