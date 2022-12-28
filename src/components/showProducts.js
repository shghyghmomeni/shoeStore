const API_URL2 = "http://localhost:3000";

const productListMainDiv = document.getElementById("product-list");
//categories
const getProducts = async () => {
  try {
    const res = await fetch(`${API_URL}/products`);
    const data = await res.json();
    console.log(data);
    // if (data.length <= 8) {
    //   data.forEach((item) => {
    //     addCategoryToDOM(item);
    //   });
    // } else {
    //   addFullCategoryToDOM(data);
    // }
  } catch {
    console.log("404 Page");
  }
};
getProducts();
