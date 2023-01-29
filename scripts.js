const productForm = document.getElementById("add-product");
const allproductDiv = document.getElementById("all-product");
const productNameInput = document.getElementById("product-name");
const productImageInput = document.getElementById("product-image");
const productPriceInput = document.getElementById("product-price");
const productTextInput = document.getElementById("product-text");

const products = JSON.parse(localStorage.getItem("lsProducts")) || [];

// add product
const addProduct = (nameValue, imageValue, priceValue, textValue) => {
  products.push({
    image: imageValue,
    price: priceValue,
    name: nameValue,
    text: textValue,
  });
  // add products localstroge
  localStorage.setItem("lsProducts", JSON.stringify(products));
};

//Create Element
const createElement = (nameValue, imageValue, priceValue, textValue) => {
  //create col
  const productCol = document.createElement("div");
  productCol.classList.add("col-lg-3");

  //create single product Div
  const productDiv = document.createElement("div");
  productDiv.classList.add("single-product");

  //create single product image
  const productImage = document.createElement("img");
  productImage.setAttribute("src", imageValue);

  //create single product price
  const productPrice = document.createElement("h5");
  productPrice.innerText = priceValue;

  //create single product name
  const productName = document.createElement("h3");
  productName.innerText = nameValue;

  //create single product p
  const productText = document.createElement("p");
  productText.innerText = textValue;

  //complete single product
  productDiv.append(productImage, productPrice, productName, productText);

  //complete col
  productCol.appendChild(productDiv);

  //complete first task
  allproductDiv.appendChild(productCol);
};

// main click function
productForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameValue = productNameInput.value;
  const imageValue = productImageInput.value;
  const priceValue = productPriceInput.value;
  const textValue = productTextInput.value;

  // task one
  createElement(nameValue, imageValue, priceValue, textValue);

  //(2) task two
  addProduct(nameValue, imageValue, priceValue, textValue);
});

// show product from local storage
products.forEach((product) => {
  createElement(
    product["name"],
    product["image"],
    product["price"],
    product["text"]
  );
});
