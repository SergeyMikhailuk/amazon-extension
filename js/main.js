const sliderRef = document.querySelector(".js-slider");
const radioRefs = document.getElementsByName("menu-btn");
const ulStoresRef = document.querySelector(".js-stores .list");
const copySpansRef = document.querySelectorAll(".hidden-span");

const homeListRef = document.querySelector(".js-home .list");
homeListRef.addEventListener("click", homeListHandler);

function homeListHandler(evt) {
  if (evt.target.nodeName === "SPAN") {
    console.log("this is a SPAN");
    const textToCopy = evt.target.nextSibling.nextSibling.textContent.trim();
    console.log(textToCopy);
    return;
  }
  if (evt.target.nodeName !== "SPAN") {
    console.log("this is not a SPAN");
  }
}

for (const radio of radioRefs) {
  radio.addEventListener("change", handleButton);
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
    anchorRef.textContent = `LOGO #${i + 1}`;
    const buttonRef = document.createElement("button");
    buttonRef.classList.add("button");
    buttonRef.textContent = "Visit stor😈";
    liRef.append(anchorRef, buttonRef);
    ulStoresRef.append(liRef);
  }
}
createStore(20);
