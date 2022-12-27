const storageUserInfo = JSON.parse(localStorage.getItem("user"));
console.log(storageUserInfo);
const picField = document.getElementById("pic-field");
const nameField = document.getElementById("name-field");

const categoriesField = document.getElementById("categories-section");

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
function addCategoryToDOM() {
  const singleCategoryDiv = document.createElement("div");
  singleCategoryDiv.classList.add(
    "flex",
    "flex-col",
    "justify-center",
    "items-center"
  );
  categoriesField.append(singleCategoryDiv);

  const categoryImg = document.createComment("img");
  categoryImg.classList.add(
    "w-[60px]",
    "h-[60px]",
    "bg-[#ECECEC]",
    "rounded-full",
    "p-4",
    "mb-2"
  );
  // categoryImg.src = category.logo;
  singleCategoryDiv.append(categoryImg);

  const categoryName = document.createElement("p");
  categoryName.classList.add("font-semibold");
  // categoryName.innerText = category.name;
  singleCategoryDiv.append(categoryName);
}
addCategoryToDOM();
