const wellcomeDiv = document.getElementById("wellcome-screen");
window.addEventListener("load", wellcomePage);
function wellcomePage() {
  const parentDiv = document.createElement("div");
  parentDiv.classList.add(
    "container",
    "w-[100%]",
    "h-[100vh]",
    "flex",
    "flex-col",
    "justify-center",
    "bg-[url(../images/welcome.png)]",
    "bg-no-repeat"
  );
  wellcomeDiv.append(parentDiv);

  const content = document.createElement("div");
  content.classList.add(
    "flex",
    "flex-col",
    "justify-end",
    "w-[100%]",
    "h-[100vh]",
    "bg-[#00000050]",
    "py-20",
    "px-6"
  );
  parentDiv.append(content);

  const nullDiv = document.createElement("div");
  content.append(nullDiv);

  const h3Text = document.createElement("h3");
  h3Text.classList.add("text-4xl", "text-white", "font-semibold");
  h3Text.innerText = "Welcome to 👋";
  nullDiv.append(h3Text);

  const h5Text = document.createElement("h5");
  h5Text.classList.add("text-8xl", "text-white", "font-semibold", "py-6");
  h5Text.innerText = "Shoea";
  nullDiv.append(h5Text);

  const h6Text = document.createElement("h6");
  h6Text.classList.add("text-1xl", "text-white", "font-medium");
  h6Text.innerText = `The best sneakers & shoes e-commerse app of the century for your fashion needs!`;
  nullDiv.append(h6Text);
}

wellcomeDiv.addEventListener("click", () => {
  wellcomeDiv.classList.add("hidden");
});
