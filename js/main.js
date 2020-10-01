const sliderRef = document.querySelector(".js-slider");
const radioRefs = document.getElementsByName("menu-btn");
const ulStoresRef = document.querySelector(".js-stores .list");

for (let i = 0; i < radioRefs.length; i += 1) {
  radioRefs[i].addEventListener("change", handleButton);
}
function handleButton() {
  switch (this.value) {
    case "home":
      sliderRef.style.transform = "translateX(0)";
      break;

    case "stores":
      sliderRef.style.transform = "translateX(-300px)";
      break;

    case "coupons":
      sliderRef.style.transform = "translateX(-600px)";
      break;

    default:
      break;
  }
}

function createStore(count) {
  for (let i = 0; i < count; i += 1) {
    const liRef = document.createElement("li");
    liRef.classList.add("item");
    const anchorRef = document.createElement("a");
    anchorRef.href = "";
    anchorRef.classList.add("icon-link");
    anchorRef.textContent = "LOGO";
    const buttonRef = document.createElement("button");
    buttonRef.classList.add("button");
    buttonRef.textContent = "Visit stor😈";
    liRef.append(anchorRef, buttonRef);
    ulStoresRef.append(liRef);
  }
}
createStore(20);
