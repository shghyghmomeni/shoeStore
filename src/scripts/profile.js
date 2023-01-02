let userInfo = JSON.parse(localStorage.getItem("user"));
const userName = document.getElementById("user-name");
const email = document.getElementById("email");
const address = document.getElementById("address");
// console.log(userInfo);
let defaultAdd = "";
function showUserInformations(userInfo) {
  userName.innerText = `${userInfo.name} ${userInfo.lastname}`;
  email.innerText = userInfo.email;
  console.log(userInfo.address);

  userInfo.address.filter((item) => {
    if (item.defaultAddress == true) {
      defaultAdd = item.address;
    }
  });
  address.innerText = defaultAdd;

  console.log(defaultAdd);

  // let defaultAddress = () => {
  //   address.innerText = userInfo.address;
  // };
}
showUserInformations(userInfo);

function goToManageAddressPage() {
  window.open("../pages/manageAddress.html", "_self");
}

function goToWishlistPage() {
  window.open("../pages/wishlist.html", "_self");
}
