const productForm = document.getElementById("add-product");
const allproductDiv = document.getElementById("all-product");
const ProductNameInput = document.getElementById("product-name");
const ProductImageInput = document.getElementById("product-image");
const ProductPriceInput = document.getElementById("product-price");
const ProductTextInput = document.getElementById("product-text");

productForm.addEventListener("submit", function (e) {
  e.preventDefault();
});
