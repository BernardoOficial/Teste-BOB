function createProducts(products) {

    let template = "";

    products.forEach(product => {

        template += `
            <article class="main__product main__show-me" data-product="${product.id}">
                <a href="/pages/produto.html" title="Visualizar produto">
                    <img class="main__product-image" loading="lazy" src="${product.image}" alt="${product.name}" title="${product.name}">
                </a>
                <h4 class="main__product-name">${product.name}</h4>
                <p class="main-product-price">R$ ${product.price}</p>
                <i class="fas fa-heart main-product-icon" onclick="bag(event)"></i>
                <i class="far fa-heart main-product-icon" onclick="bag(event)"></i>
            </article>
        `;
    })

    return template;
}