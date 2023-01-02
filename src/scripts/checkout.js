const backIcon = document.querySelector(".back-icon");
backIcon.addEventListener("click", showPrePage);

let storageUserInfo = JSON.parse(localStorage.getItem("user"));
let activeOrders = storageUserInfo.orders.active;

const showProductDiv = document.getElementById("show-product-div");
const defaultAddress = document.getElementById("default-address");
const editAddress = document.getElementById("edit-address");

const paymentBtn = document.getElementById("payment-btn");
paymentBtn.addEventListener("click", goToPayment);

let defaultAdd = "";

//back app bar
function showPrePage() {
  // history.back();
  window.open("../pages/cart.html", "_self");
}

//address
function showUserAddress(userInfo) {
  userInfo.address.filter((item) => {
    if (item.defaultAddress == true) {
      defaultAdd = item.address;
    }
  });
  defaultAddress.innerText = defaultAdd;
  console.log(defaultAdd);
}
showUserAddress(storageUserInfo);

//show products
function showActiveProducts() {
  activeOrders.forEach((element) => {
    productCartAddToDOM(element);
  });
}
showActiveProducts();

//single product cart
function productCartAddToDOM(item) {
  const cartSingleProduct = document.createElement("div");
  cartSingleProduct.classList.add(
    "cart-single-product",
    "flex",
    "flex-row",
    "bg-white",
    "w-[100%]",
    "my-2",
    "p-3",
    "rounded-3xl"
  );
  cartSingleProduct.id = item.id;
  showProductDiv.append(cartSingleProduct);

  //product image box
  const cartImageDiv = document.createElement("div");
  cartImageDiv.classList.add("bg-[#F3F3F3]", "w-[30%]", "p-2", "rounded-3xl");
  cartSingleProduct.append(cartImageDiv);
  const cartImage = document.createElement("img");
  cartImage.src = item.image;
  cartImageDiv.append(cartImage);

  //product Information Div
  const cartProductInfoDiv = document.createElement("div");
  cartProductInfoDiv.classList.add(
    "flex",
    "flex-col",
    "justify-between",
    "w-[70%]",
    "pl-3",
    "text-lg",
    "font-semibold"
  );
  cartSingleProduct.append(cartProductInfoDiv);

  //product Information box / Line 1 / Title + Delete icon
  const titleDiv = document.createElement("div");
  titleDiv.classList.add("flex", "flex-row", "justify-between", "items-center");
  cartProductInfoDiv.append(titleDiv);

  const title = document.createElement("h1");
  title.innerText = item.name;
  titleDiv.append(title);

  //product Information box / Line 2 / selected color + size
  const colorAndSizeDiv = document.createElement("div");
  colorAndSizeDiv.classList.add("flex", "flex-row", "gap-2", "items-center");
  cartProductInfoDiv.append(colorAndSizeDiv);

  const colorDiv = document.createElement("div");
  colorDiv.classList.add("rounded-full", "w-4", "h-4", `bg-[${item.color}]`);
  colorAndSizeDiv.append(colorDiv);

  const colortitle = document.createElement("p");
  colortitle.classList.add("text-sm");
  colortitle.innerText = item.colorTitle;
  colorAndSizeDiv.append(colorDiv);

  const line = document.createElement("div");
  line.classList.add("w-[1px]", "h-3", "bg-gray-700");
  colorAndSizeDiv.append(line);

  const size = document.createElement("p");
  size.classList.add("text-sm");
  size.innerText = `size = ${item.size}`;
  colorAndSizeDiv.append(size);

  //product Information box / Line 3 / cost + quantity
  const costDiv = document.createElement("div");
  costDiv.classList.add("flex", "flex-row", "justify-between", "items-center");
  cartProductInfoDiv.append(costDiv);

  const cost = document.createElement("h1");
  cost.classList.add("font-bold", "text-lg");
  cost.innerText = `$ ${item.cost}`;
  costDiv.append(cost);

  const quantity = document.createElement("div");
  quantity.classList.add("flex", "flex-row", "text-base");
  costDiv.append(quantity);

  const quantityNum = document.createElement("div");
  quantityNum.classList.add(
    "rounded-full",
    "flex",
    "flex-row",
    "justify-center",
    "items-center",
    "h-8",
    "bg-[#F3F3F3]",
    "w-8"
  );
  quantityNum.innerText = `${item.quantity}`;
  quantity.append(quantityNum);
}

//button
function goToPayment() {
  window.open("../pages/peyment.html", "_self");
}
