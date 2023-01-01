const API_URL = "http://localhost:3000";
const addToCartDiv = document.getElementById("add-to-cart-div");
const backIcon = document.querySelector(".back-icon");
backIcon.addEventListener("click", showPrePage);
const productImage = document.querySelector(".product-image");
const productTitle = document.querySelector(".product-title");
const productDescription = document.querySelector(".product-description");
const sizeDiv = document.querySelector(".choose-size");
const colorDiv = document.querySelector(".choose-color");
const productID = window.location.href.split("=").reverse()[0];

//object
const reserveProductPattern = {
  name: "",
  color: "",
  size: "",
  cost: 0,
  quantity: 1,
};

//back app bar
function showPrePage() {
  history.back();
}

//get product information
const getProductDetails = async () => {
  try {
    // console.log(productID);
    const res = await fetch(`${API_URL}/products/${productID}`);
    const singleProduct = await res.json();
    showAddToCartField(singleProduct);
    showProductDetails(singleProduct);
  } catch (e) {
    console.log("404 Eror", e);
  }
};
getProductDetails();

//show product information
function showProductDetails(product) {
  productImage.src = product.image;
  productTitle.innerText = product.productName;
  productDescription.innerText = product.description;
  // console.log(product.size);
  product.size.forEach((element) => {
    const size = document.createElement("div");
    size.classList.add(
      "sizes",
      "flex",
      "justify-center",
      "items-center",
      "text-lg",
      "font-bold",
      "w-[50px]",
      "h-[50px]",
      "border-2",
      "bg-white",
      "text-black",
      "border-black",
      "rounded-full"
    );
    size.innerText = element;
    size.addEventListener("click", (e) => {
      e.preventDefault();
      let sizes = document.querySelectorAll(".sizes");
      sizes.forEach((element) => {
        if (element.classList.contains("text-white")) {
          element.classList.remove("text-white", "bg-[#212529]");
          element.classList.add("text-black", "bg-white");
        }
      });
      e.target.classList.remove("text-black", "bg-white");
      e.target.classList.add("text-white", "bg-[#212529]");
      localStorage.setItem("selectedSize", JSON.stringify(e.target.innerText));
      console.log(e.target.innerText);
    });
    sizeDiv.append(size);
  });
  product.colorCode.forEach((element) => {
    const color = document.createElement("div");
    color.id = `${element}`;
    color.classList.add(
      "flex",
      "justify-center",
      "items-center",
      "colors",
      "text-3xl",
      "w-[50px]",
      "h-[50px]",
      "rounded-full",
      `bg-[${element}]`
    );
    color.addEventListener("click", (e) => {
      e.preventDefault();
      let colors = document.querySelectorAll(".colors");
      colors.forEach((element) => {
        if (element.innerText == "✓") {
          element.innerText = "";
        }
      });
      e.target.innerText = "✓";
      e.target.classList.remove("border-white");
      localStorage.setItem("selectedColor", JSON.stringify(e.target.id));
    });
    colorDiv.append(color);
  });
}

//show checkout information
function showAddToCartField(product) {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add(
    "w-[100%]",
    "h-[100%]",
    "flex",
    "flex-row",
    "justify-between",
    "items-center"
  );
  addToCartDiv.append(mainDiv);

  const totalCostDiv = document.createElement("div");
  totalCostDiv.id = "total-cost-div";
  totalCostDiv.classList.add("w-[40%]", "z-50", "px-4", "py-1");
  mainDiv.append(totalCostDiv);

  const h6 = document.createElement("h6");
  h6.classList.add("text-gray-700", "text-xs", "font-semibold", "pb-2");
  h6.innerText = "Total price";
  totalCostDiv.append(h6);

  const totalPrice = document.createElement("p");
  totalPrice.classList.add("text-2xl", "font-bold");
  totalPrice.innerText = `$ ${product.cost}`;
  totalCostDiv.append(totalPrice);

  const addBtn = document.createElement("button");
  addBtn.classList.add(
    "flex",
    "flex-row",
    "justify-center",
    "items-center",
    "gap-3",
    "w-[60%]",
    "z-50",
    "px-4",
    "bg-[#212529]",
    "text-xl",
    "text-white",
    "py-4",
    "rounded-full"
  );
  addBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
</svg>
<p>Add To Cart</p>`;
  mainDiv.append(addBtn);

  addBtn.addEventListener("click", () => {
    let reserveProduct = new Object(reserveProductPattern);
    reserveProduct.name = product.productName;
    reserveProduct.color = JSON.parse(localStorage.getItem("selectedColor"));
    reserveProduct.size = JSON.parse(localStorage.getItem("selectedSize"));
    reserveProduct.cost = product.cost;
    reserveProduct.quantity = 1;
    addToCart(reserveProduct);
  });
}

function addToCart(product) {
  console.log(product);
  let storageUserInfo = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user"))
    : [];
  storageUserInfo.orders.active.push(product);
  localStorage.setItem("user", JSON.stringify(storageUserInfo));
  console.log("storageUserInfo updated / poduct added to cart");
}
