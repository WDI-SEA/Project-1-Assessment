const display = document.querySelector(".number-display");
const input = document.querySelector("#input");
const plusButton = document.querySelector("#plus-button");
const minusButton = document.querySelector("#minus-button");
const buttons = document.querySelector(".plus-minus");

input.value = 1;

plusButton.addEventListener("click", () => {
  display.innerText = input.value;
});
minusButton.addEventListener("click", () => {
  display.innerText = display.innerText - input.value;
});

minusButton.addEventListener("mouseover", () => {
  minusButton.style.backgroundColor = "white";
  minusButton.style.border = "1px solid lightgray";
  minusButton.style.color = "darkgray";
});
minusButton.addEventListener("mouseout", () => {
  minusButton.style.backgroundColor = "darkgray";
  minusButton.style.border = "3px solid darkgray";
  minusButton.style.color = "white";
});
plusButton.addEventListener("mouseover", () => {
  plusButton.style.backgroundColor = "white";
  plusButton.style.border = "1px solid lightgray";
  plusButton.style.color = "darkgray";
});
plusButton.addEventListener("mouseout", () => {
  plusButton.style.backgroundColor = "darkgray";
  plusButton.style.border = "3px solid darkgray";
  plusButton.style.color = "white";
  plusButton.style.textAlign = "center";
});
