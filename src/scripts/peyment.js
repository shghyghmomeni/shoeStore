const backIcon = document.querySelector(".back-icon");
backIcon.addEventListener("click", showPrePage);

const applyBtn = document.getElementById("apply-btn");
applyBtn.addEventListener("click", goTocheckoutPage);

let storageUserInfo = JSON.parse(localStorage.getItem("user"))
  ? JSON.parse(localStorage.getItem("user"))
  : [];
let activeOrders = storageUserInfo.orders.active;
let ComletedOrders = storageUserInfo.orders.completed;

//back app bar
function showPrePage() {
  history.back();
}

//apply btn
function goTocheckoutPage() {
  activeOrders.forEach((element) => {
    ComletedOrders.push(element);
  });
  activeOrders.length = 0;

  let storageUserInfo = localStorage.setItem(
    "user",
    JSON.stringify(storageUserInfo)
  );
  window.open("../pages/orderSuccessful.html", "_self");
}
