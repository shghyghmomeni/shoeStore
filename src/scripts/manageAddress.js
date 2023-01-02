const backIcon = document.querySelector(".back-icon");
backIcon.addEventListener("click", showPrePage);

const applyBtn = document.getElementById("apply-btn");
applyBtn.addEventListener("click", goTocheckoutPage);

//back app bar
function showPrePage() {
  history.back();
}

//apply btn
function goTocheckoutPage() {
  window.open("../pages/checkout.html", "_self");
}
