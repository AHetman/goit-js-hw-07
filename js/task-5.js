function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorSelect = document.querySelector(".widget");
const colorValue = document.querySelector(".color");
colorSelect.addEventListener("click", onColorChangeBtn);
function onColorChangeBtn() {
  colorValue.textContent = getRandomHexColor();
  colorSelect.parentNode.style.backgroundColor = colorValue.textContent;
}
