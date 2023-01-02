const showProductDiv = document.getElementById("show-product-div");
const checkoutDiv = document.getElementById("checkout-div");
let storageUserInfo = JSON.parse(localStorage.getItem("user"));
const deletePopup = document.getElementById("delete-popup");
let activeOrders = storageUserInfo.orders.active;
let totalSum = 0;
// console.log(activeOrders);

let totalSumFunction = (arr) => {
  totalSum = 0;
  arr.forEach((item) => {
    totalSum += item.cost;
  });
};
totalSumFunction(activeOrders);

activeOrders.forEach((element) => {
  productCartAddToDOM(element);
});

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

  const deleteIcon = document.createElement("div");
  deleteIcon.innerHTML = `<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  class="w-6 h-6"
  >
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
  />
  </svg>`;
  deleteIcon.addEventListener("click", (e) => {
    deletePopup.classList.toggle("hidden");
    let selectedProductForDelete = e.target.closest(`.cart-single-product`);
    localStorage.setItem(
      "selectedProductForDeleteID",
      JSON.stringify(selectedProductForDelete.id)
    );
  });
  titleDiv.append(deleteIcon);

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

  const minus = document.createElement("div");
  minus.classList.add(
    "flex",
    "flex-row",
    "justify-center",
    "items-center",
    "h-8",
    "bg-[#F3F3F3]",
    "w-8",
    "rounded-l-full"
  );
  minus.innerText = "-";
  minus.addEventListener("click", () => {
    if (item.quantity <= 1) {
      item.quantity = 1;
      quantityNum.innerText = `1`;
    } else {
      item.quantity--;
      quantityNum.innerText = `${item.quantity}`;
    }
  });
  quantity.append(minus);

  const quantityNum = document.createElement("div");
  quantityNum.classList.add(
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

  const plus = document.createElement("div");
  plus.classList.add(
    "flex",
    "flex-row",
    "justify-center",
    "items-center",
    "h-8",
    "bg-[#F3F3F3]",
    "w-8",
    "rounded-r-full"
  );
  plus.innerText = "+";
  plus.addEventListener("click", () => {
    item.quantity++;
    quantityNum.innerText = `${item.quantity}`;
  });
  quantity.append(plus);
}

//checkout information
function showCheckoutField() {
  checkoutDiv.innerHTML = "";
  const mainDiv = document.createElement("div");
  mainDiv.classList.add(
    "w-[100%]",
    "h-[100%]",
    "flex",
    "flex-row",
    "justify-between",
    "items-center"
  );
  checkoutDiv.append(mainDiv);

  const totalCostDiv = document.createElement("div");
  totalCostDiv.id = "total-cost-div";
  totalCostDiv.classList.add("w-[40%]", "z-40", "px-4", "py-1");
  mainDiv.append(totalCostDiv);

  const h6 = document.createElement("h6");
  h6.classList.add("text-gray-700", "text-xs", "font-semibold", "pb-2");
  h6.innerText = "Total price";
  totalCostDiv.append(h6);

  const totalPrice = document.createElement("p");
  totalPrice.classList.add("text-2xl", "font-bold");
  totalPrice.innerText = `$ ${totalSum}`;
  totalCostDiv.append(totalPrice);

  const checkoutBtn = document.createElement("button");
  checkoutBtn.classList.add(
    "w-[60%]",
    "z-40",
    "px-4",
    "bg-[#212529]",
    "text-xl",
    "text-white",
    "py-4",
    "rounded-full"
  );
  checkoutBtn.innerText = "Checkout";
  mainDiv.append(checkoutBtn);
}
showCheckoutField();

//popup buttons function
function cancelDelete() {
  console.log("cancel delete!");
  deletePopup.classList.toggle("hidden");
}
function yesDelete() {
  console.log("yes delete!");
  deletePopup.classList.toggle("hidden");
  deleteFromCart();
}

//Delete from cart
function deleteFromCart() {
  //ID
  let selectedProductForDeleteID = JSON.parse(
    localStorage.getItem("selectedProductForDeleteID")
  );
  // console.log(selectedProductForDeleteID);

  //USER

  let storageUserInfoArr = storageUserInfo ? storageUserInfo : [];
  storageUserInfoArr.orders.active = storageUserInfoArr.orders.active.filter(
    (item) => {
      return `${item.id}` !== selectedProductForDeleteID;
    }
  );
  // console.log(storageUserInfoArr.orders.active);
  console.log(storageUserInfoArr);
  showProductDiv.innerHTML = "";
  storageUserInfoArr.orders.active.forEach((element) => {
    productCartAddToDOM(element);
  });
  totalSumFunction(storageUserInfoArr.orders.active);
  console.log("total sum now", totalSum);
  showCheckoutField();
  localStorage.setItem("user", JSON.stringify(storageUserInfoArr));
  // console.log("storageUserInfo updated / poduct removed from cart");
}
