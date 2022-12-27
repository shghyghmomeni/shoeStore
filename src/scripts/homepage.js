const storageUserInfo = JSON.parse(localStorage.getItem("user"));
console.log(storageUserInfo);
const picField = document.getElementById("pic-field");
const nameField = document.getElementById("name-field");

// App bar
function showUserInfo(name, lastname, picture) {
  console.log(picture);
  picField.src = picture;
  nameField.innerText = `${name} ${lastname}`;
}
showUserInfo(
  storageUserInfo.name,
  storageUserInfo.lastname,
  storageUserInfo.pic
);

//search

//categories
