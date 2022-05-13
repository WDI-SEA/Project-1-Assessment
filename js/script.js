const displayNumber = document.querySelector(".displayNumber");
const addBtn = document.querySelector(".addBtn");
const subtractBtn = document.querySelector(".subtractBtn");
const input = document.querySelector("#userInput");

let num = 0;

const add = (number) => {
  num += number;
  displayNumber.innerText = num;
  return num;
};

const subtract = (number) => {
  num -= number;
  displayNumber.innerText = num;
  return num;
};

const turnRed = () => {
  if (num < 0) {
    displayNumber.style.color = "red";
  } else {
    displayNumber.style.color = "black";
  }
};

addBtn.addEventListener("click", () => {
  add(parseInt(input.value));
  turnRed();
});
subtractBtn.addEventListener("click", () => {
  subtract(parseInt(input.value));
  turnRed();
});
