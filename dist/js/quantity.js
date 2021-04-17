const more1 = document.querySelector("[data-more-1]");
const less1 = document.querySelector("[data-less-1]");
const elementQuantity = document.querySelector("[data-current-quantity]");

more1.addEventListener("click", increaseQuantity);
less1.addEventListener("click", decreaseQuantity);

let valorInitial = '01';
elementQuantity.textContent = valorInitial;

function decreaseQuantity() {
    let currentQuantity = Number(elementQuantity.textContent);

    if (currentQuantity <= 1) {
        return;
    }

    --currentQuantity;
    String(currentQuantity).length <= 1
        ? (elementQuantity.textContent = `0${currentQuantity}`)
        : (elementQuantity.textContent = currentQuantity);
}

function increaseQuantity() {
    let currentQuantity = Number(elementQuantity.textContent);

    if (currentQuantity >= 20) {
      return;
    }

    ++currentQuantity;
    String(currentQuantity).length <= 1
        ? elementQuantity.textContent = `0${currentQuantity}`
        : elementQuantity.textContent = currentQuantity;
}

