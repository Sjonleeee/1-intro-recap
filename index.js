{
  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  };

  const getProductsAlt = () =>
    fetch("https://fakestoreapi.com/products").then((r) => r.json());

  const showProducts = (products) => {
    products.forEach((product) => {
      const $card = document.querySelector(".products__item");
      const $newCard = $card.cloneNode(true);

      $newCard.querySelector(".product__title").innerText = product.title;
      $newCard.querySelector(".product__image").src = product.image;
      $newCard.querySelector(".product__price span").innerText = product.price;
      $newCard.querySelector(".product__description").innerText = product.description;

      $card.parentNode.appendChild($newCard);
    });

    document.querySelector(".products__item").remove();
  };

  const init = async () => {
    // read the JSON file
    const products = await getProducts();
    // parse the data into HTML elements
    showProducts(products);
  };

  init();
}

