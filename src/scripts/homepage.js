const API_URL = "http://localhost:3000";
const storageUserInfo = JSON.parse(localStorage.getItem("user"));
const picField = document.getElementById("pic-field");
const nameField = document.getElementById("name-field");
let allCategoryData;

const categoriesField = document.getElementById("categories-section");

// App bar
function showUserInfo(name, lastname, picture) {
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
const getCategoriesList = async () => {
  try {
    const res = await fetch(`${API_URL}/categories`);
    const data = await res.json();
    if (data.length <= 8) {
      data.forEach((item) => {
        addCategoryToDOM(item);
      });
    } else {
      addFullCategoryToDOM(data);
    }
  } catch {
    console.log("404 Page");
  }
};
getCategoriesList();

function addCategoryToDOM(item) {
  const logo = item.logo;
  const singleCategoryDiv = document.createElement("div");
  singleCategoryDiv.classList.add(
    "flex",
    "flex-col",
    "justify-center",
    "items-center"
  );
  categoriesField.append(singleCategoryDiv);

  const categoryImg = document.createElement("img");
  categoryImg.classList.add(
    "w-[60px]",
    "h-[60px]",
    "bg-[#ECECEC]",
    "rounded-full",
    "p-4",
    "mb-2"
  );
  categoryImg.src = logo;
  singleCategoryDiv.append(categoryImg);

  const categoryName = document.createElement("p");
  categoryName.classList.add("font-semibold", "truncate", "w-13");
  categoryName.innerText = item.brandName;
  singleCategoryDiv.append(categoryName);
}

function addFullCategoryToDOM(data) {
  CategoryLimitSize = data.length;
  allCategoryData = data;
  console.log(allCategoryData);
  for (let i = 0; i < 7; i++) {
    addCategoryToDOM(allCategoryData[i]);
  }
  //insert more icon for categorires
  const singleMoreDiv = document.createElement("div");
  singleMoreDiv.classList.add(
    "flex",
    "flex-col",
    "justify-center",
    "items-center"
  );
  categoriesField.append(singleMoreDiv);
  const moreImg = document.createElement("img");
  moreImg.classList.add(
    "w-[60px]",
    "h-[60px]",
    "bg-[#ECECEC]",
    "rounded-full",
    "p-4",
    "mb-2"
  );
  moreImg.src = "../icons/more-icon.svg";
  singleMoreDiv.append(moreImg);
  const moreTitle = document.createElement("p");
  moreTitle.classList.add("font-semibold", "truncate", "w-13");
  moreTitle.innerText = "More ...";
  singleMoreDiv.append(moreTitle);

  singleMoreDiv.addEventListener("click", () => {
    singleMoreDiv.classList.add("hidden");
    for (let i = 7; i < CategoryLimitSize; i++) {
      addCategoryToDOM(allCategoryData[i]);
    }
  });
}
