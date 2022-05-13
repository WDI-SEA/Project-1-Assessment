const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");
let output = document.querySelector(".output");
let input = document.querySelector("#inputText");
input.defaultValue = 1;

plusButton.addEventListener("click", add);
minusButton.addEventListener("click", minus);

function add() {
  outputNum = Number(output.innerText);
  let inputNum = Number(input.value);
  let total = outputNum;
  total += inputNum;
  document.querySelector(".output").innerText = total;
  return total;
}

function minus() {
  outputNum = Number(output.innerText);
  let inputNum = Number(input.value);
  let total = outputNum;
  total -= inputNum;
  document.querySelector(".output").innerText = total;
  return total;
}

if (total < 0) {
  output.style.backgraoundColor = "red";
}
