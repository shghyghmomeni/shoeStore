const API_URL = "http://localhost:3000";
const backIcon = document.querySelector(".back-icon");
backIcon.addEventListener("click", showPrePage);
const searchInput = document.getElementById("search-input");
const productListMainDiv = document.getElementById("product-list");

//back app bar
function showPrePage() {
  // history.back();
  window.open("../pages/homepage.html", "_self");
}

// "http://localhost:3000/customer?name_like=rist"

window.addEventListener("load", (event) => {
  event.preventDefault();

  findProducts();
});

//search
searchInput.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    localStorage.setItem("lastsearchText", JSON.stringify(searchInput.value));
    findProducts();
  }
});

const findProducts = async () => {
  try {
    const storageLastSearchText = JSON.parse(
      localStorage.getItem("lastsearchText")
    );
    const res = await fetch(
      `${API_URL}/products?productName_like=${storageLastSearchText}`
    );
    const data = await res.json();

    data.forEach((item) => {
      showProductsInDOM(item);
      console.log(item);
    });
  } catch (e) {
    console.log(e, "404 Page");
  }
};

function showProductsInDOM(item) {
  const cart = document.createElement("div");
  cart.classList.add("h-[244px]", "mb-6");
  cart.id = item.id;
  cart.addEventListener("click", goToSingleProductPage);
  productListMainDiv.append(cart);

  const imageDiv = document.createElement("div");
  imageDiv.classList.add(
    "flex",
    "justify-center",
    "items-center",
    "bg-[#F3F3F3]",
    "w-[100%]",
    "h-[182px]",
    "rounded-3xl"
  );
  cart.append(imageDiv);

  const image = document.createElement("img");
  image.src = item.image;
  imageDiv.append(image);

  const informationDiv = document.createElement("div");
  cart.append(informationDiv);

  const title = document.createElement("h3");
  title.classList.add("text-2xl", "font-bold", "my-1", "truncate");
  title.innerText = item.productName;
  informationDiv.append(title);

  const cost = document.createElement("p");
  cost.classList.add("text-base", "font-bold", "my-1", "truncate");
  cost.innerText = `$ ${item.cost}`;
  informationDiv.append(cost);
}

//go to single page
function goToSingleProductPage(e) {
  productID = e.currentTarget.id;
  console.log(productID);
  getSingleProducts(productID);
}

const getSingleProducts = async (productID) => {
  try {
    const res = await fetch(`${API_URL}/products?id=${productID}`);
    const singleProduct = await res.json();
    console.log(singleProduct);
    window.open(`../pages/singleProduct.html?id=${productID}`, "_self");
  } catch {
    console.log("404 Page");
  }
};
