let plusButton = document.querySelector('#plus')
plusButton.addEventListener('click', buttonPlusClick)

let minusButton = document.querySelector('#minus')
minusButton.addEventListener('click', buttonMinusClick)

let disp = document.getElementById('countDisplay')
let input = document.getElementById('numInput')
let dispStore = 0

function buttonPlusClick () {
    dispStore = input.value
    disp.innerText = input.value
}

function buttonMinusClick () {
    disp.innerText = dispStore - input.value

}