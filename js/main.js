const sliderRef = document.querySelector(".js-slider");
const radioRefs = document.getElementsByName("menu-btn");
const ulStoresRef = document.querySelector(".js-stores .list");
const copySpansRef = document.querySelectorAll(".hidden-span");

for (const span of copySpansRef) {
  span.addEventListener("click", copiedToClipboard);
}

function copiedToClipboard(e) {
  const textToCopy = e.currentTarget.nextSibling.nextSibling.textContent.trim();
  if (textToCopy) navigator.clipboard.writeText(textToCopy);

  console.log(textToCopy);
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
