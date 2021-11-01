// for checking
// console.log('whats suuuuuuuuuuuuuuuuu')
const displayedNumber = document.getElementById('number')
const minusButton = document.getElementById('minus-button')
const inputNumber = document.getElementById('number-goes-here')
const plusButton = document.getElementById('plus-button')

// plus buttons
function pressPlus () {
    let displaySum = Number(inputNumber.value) + Number(displayedNumber.innerText)
    displayedNumber.innerText = displaySum
}

// minus button
function pressMinus () {
    let displaySum = Number(displayedNumber.innerText) - Number(inputNumber.value)
    displayedNumber.innerText = displaySum
    
    if (displaySum < 0) {
        displayedNumber.style.color = 'red'
    } else {
        displayedNumber.style.color = 'black'
    }

}

// event listeners
plusButton.addEventListener('click', pressPlus)
minusButton.addEventListener('click', pressMinus)