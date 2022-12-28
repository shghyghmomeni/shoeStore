const navigationIcons = [
  {
    title: "Home",
    icon: "../icons/house-icon.svg",
  },
  {
    title: "Cart",
    icon: "../icons/bag-icon.svg",
  },
  {
    title: "Orders",
    icon: "../icons/shop-icon.svg",
  },
  {
    title: "Profile",
    icon: "../icons/profile-icon.svg",
  },
];
const bottomNavDiv = document.getElementById("bottom-nav");

function createBottomNavigation() {
  const bottomNavigationDiv = document.createElement("div");
  bottomNavigationDiv.classList.add(
    "flex",
    "flex-row",
    "justify-around",
    "items-center",
    "h-[10vh]"
  );
  bottomNavDiv.append(bottomNavigationDiv);

  navigationIcons.forEach((item) => {
    const contentDiv = document.createElement("div");
    contentDiv.classList.add(
      "flex",
      "flex-col",
      "justify-center",
      "items-center"
    );
    bottomNavigationDiv.append(contentDiv);

    const iconBox = document.createElement("img");
    iconBox.src = item.icon;
    iconBox.classList.add("w-7", "border-[#212529]");
    contentDiv.append(iconBox);

    const iconTitle = document.createElement("p");
    iconTitle.innerText = item.title;
    iconTitle.classList.add("font-bold", "mt-2");
    contentDiv.append(iconTitle);
  });
}
createBottomNavigation();
