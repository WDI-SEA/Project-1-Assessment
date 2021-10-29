//variables needed
let numberInput = document.querySelector('#num')
let plusButton = document.querySelector('#plus')
let minusButton = document.querySelector('#minus')
let newNum = document.querySelector('#total')
let totalNum = 0;
//function to add or subtract
const plus = () => {
    totalNum = parseInt(totalNum) + parseInt(numberInput.value)
    newNum.innerText = totalNum
    console.log(numberInput.value)
}
const minus = () => {
    totalNum = parseInt(totalNum) - parseInt(numberInput.value)
    newNum.innerText = totalNum
    console.log(numberInput.value)
}
plusButton.addEventListener('click', plus)
minusButton.addEventListener('click', minus)
