let activeTab = document.getElementById("active-tab");
let completeTab = document.getElementById("complete-tab");
let showProductsBox = document.getElementById("show-products-box");
let storageUserInfo = JSON.parse(localStorage.getItem("user"))
  ? JSON.parse(localStorage.getItem("user"))
  : [];

function showActiveProducts() {
  activeTab.classList.add("border-b-4");
  completeTab.classList.remove("border-b-4");
  showProductsBox.innerHTML = "";

  if (storageUserInfo.orders.active.length == 0) {
    noFoundPage("Active");
  } else {
    storageUserInfo.orders.active.forEach((element) => {
      productAddToDOM(element, "Pending");
    });
  }
}
showActiveProducts();

function showCompleteProducts() {
  showProductsBox.innerHTML = "";
  activeTab.classList.toggle("border-b-4");
  completeTab.classList.toggle("border-b-4");
  if (storageUserInfo.orders.completed.length == 0) {
    noFoundPage("Complete");
  } else {
    storageUserInfo.orders.completed.forEach((element) => {
      productAddToDOM(element, "Completed");
    });
  }
}

//single product cart
function productAddToDOM(item, status) {
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
  showProductsBox.append(cartSingleProduct);

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

  //product Information box / Line 1 / Title + Status
  const titleDiv = document.createElement("div");
  titleDiv.classList.add("flex", "flex-row", "justify-between", "items-center");
  cartProductInfoDiv.append(titleDiv);

  const title = document.createElement("h1");
  title.innerText = item.name;
  titleDiv.append(title);

  const pending = document.createElement("div");
  pending.classList.add(
    "bg-[#212529]",
    "text-white",
    "px-3",
    "py-2",
    "text-sm",
    "rounded-full"
  );
  pending.innerHTML = `${status}`;
  titleDiv.append(pending);

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

  //product Information box / Line 3 / cost
  const costDiv = document.createElement("div");
  costDiv.classList.add("flex", "flex-row", "justify-between", "items-center");
  cartProductInfoDiv.append(costDiv);

  const cost = document.createElement("h1");
  cost.classList.add("font-bold", "text-lg");
  cost.innerText = `$ ${item.cost}`;
  costDiv.append(cost);
}

function noFoundPage(str) {
  let noFoundDiv = document.createElement("div");
  noFoundDiv.classList.add(
    "w-[100%]",
    "v-[100vh]",
    "mt-[7vh]",
    "flex",
    "flex-col",
    "justify-center",
    "align-center"
  );
  noFoundDiv.innerHTML = `<img src="../images/nofound.png"/>
  <h3 class="text-2xl text-center font-semibold">There is No ${str} product</h3>`;
  showProductsBox.append(noFoundDiv);
}
