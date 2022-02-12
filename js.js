// console.log("IT WORKS!");

const input = document.getElementById("num-input");
const num = document.createElement("input");
num.setAttribute("type", "num");

const addButton = document.getElementById("add-button");
const minusButton = document.getElementById("add-button");
document.addEventListener("click", add());
document.addEventListener("click", subtract());
// const resultOutput = (document.getElementById("output").innerHTML = "result";

let result = 0;

function add() {
  document.getElementById("output").value = "12";
}

function subtract() {
  document.getElementById("output").value = "result + input";
}

console.log(subtract());
