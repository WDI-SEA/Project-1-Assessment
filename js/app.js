//The counter display will either add or subtract the number in the input field to the counter depending on which button is clicked.
//Need to add event listeners to each of the buttons and appropritate event handlers to add/subtract to counter.

//First, we'll get the input from the field and checking to see if it's a number
//Second, add event listeners and anonymous functions to the buttons to add/subtract the inputted number to the counter
//      The event handler will update the innerText of the counterDisplay

//Define Global Variables
const addButton = document.getElementById('addButton')
const minusButton = document.getElementById('minusButton')
const inputField = document.getElementById('inputField')
const counterDisplay = document.getElementById('currentCountDisplay')

//Test elements
// console.log(addButton, minusButton, inputField, counterDisplay)
//On document load, current count is 0 and input field is 1
document.addEventListener('DOMContentLoaded', () => {
    counterDisplay.innerText = 0
    inputField.value = 1

//addButton functionality
addButton.addEventListener('click', () => {
    counterDisplay.innerText = Number(counterDisplay.innerText) + Number(inputField.value)
    console.log(counterDisplay.innerText)
    if(Number(counterDisplay.innerText < 0)) {
        counterDisplay.style.color = 'red'
    } else {
        counterDisplay.style.color = 'black'
    }
})
//minusButton Functionality
minusButton.addEventListener('click', () => {
    counterDisplay.innerText = counterDisplay.innerText - inputField.value
    console.log(counterDisplay.innerText)
    if(Number(counterDisplay.innerText < 0)) {
        counterDisplay.style.color = 'red'
    } else {
        counterDisplay.style.color = 'black'
    }
})



})
