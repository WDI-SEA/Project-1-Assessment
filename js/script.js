// for checking
// console.log('whats suuuuuuuuuuuuuuuuu')
const displayedNumber = document.getElementById('number')
const minusButton = document.getElementById('minus-button')
const inputNumber = document.getElementById('number-goes-here')
const plusButton = document.getElementById('plus-button')


function pressPlus () {
    if (inputNumber.value == 1 && displayedNumber.innerText == 0) {
        displayedNumber.innerText = 1
    } else {
        displayedNumber.innerText++
    }
}

function pressMinus () {
    if (inputNumber.value == 1 && displayedNumber.innerText == 0) {
        displayedNumber.innerText = 1
    } else {
        inputNumber.value--
        displayedNumber.innerText--
    }
}

    // if the plus button is pressed add 1
    plusButton.addEventListener('click', pressPlus)
    minusButton.addEventListener('click', pressMinus)