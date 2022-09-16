{
  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  };

  // fetch is a promise that needs to be resolved
  // then resolves the promise
  // use a callback function where r is the result of the promise
  // we need to convert this result to json
  // we return the json object as return value for getProducsAlt
  const getProductsAlt = () =>
    fetch("https://fakestoreapi.com/products").then((r) => r.json());

  const showProducts = (products) => {
    products.forEach((product) => {
      // the dollar sign is used to store DOM elements in variables
      const $card = document.querySelector(".products__item");
      const $newCard = $card.cloneNode(true);

      $newCard.querySelector(".product__title").innerText = product.title;
      $newCard.querySelector(".product__image").src = product.image;
      $newCard.querySelector(".product__price span").innerText = product.price;
      $newCard.querySelector(".product__description").innerText = product.description;

      // take the parent HTML node, append means add as last item
      // prepend = add as first item
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
  // 1. call the init function to start the application
  init();
}

