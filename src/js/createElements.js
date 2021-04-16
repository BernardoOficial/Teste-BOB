function createProducts(products) {

    let template = "";

    products.forEach(product => {

        template += `
            <article class="main__product main__show-me" data-product="${product.id}">
                <a href="#" title="Visualizar product">
                    <img class="main__product-image" loading="lazy" src="${product.image}" alt="${product.name}" title="${product.name}">
                    <h4 class="main__product-name">${product.name}</h4>
                    <p class="main-product-price">R$ ${product.price}</p>
                    <i class="far fa-heart main-product-icon"></i>
                </a>
            </article>
        `;
    })

    return template;
}