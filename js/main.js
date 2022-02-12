const additionButton = document.querySelector("#add");
const inputNumber = document.querySelector("#inputNumber");
const subtractButton = document.querySelector("#subtract");
const outputNumber = document.querySelector("#outputNum");

additionButton.addEventListener("click", function () {
  outputNumber.innerText = Number(outputNumber.innerText) + Number(inputNumber.value);
  // console.log(inputNumber.value)
  // console.log(outputNumber.innerText)
});

subtractButton.addEventListener("click", function () {
  outputNumber.innerText = Number(outputNumber.innerText) - Number(inputNumber.value);
  // console.log(outputNumber.innerText)
});
