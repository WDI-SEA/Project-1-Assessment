// Define variables that hold application state, cache DOM elements, hold lookup data (constants), etc.
// Select elements in the DOM.
// Listen for browser events, such as click, being dispatched by DOM elements.
// Manipulate a DOM element's content and style.

let numResult = document.getElementById('numberResult')
let numInput = document.getElementById('numberInput')
const minusBtn = document.getElementById('minusBtn')
const plusBtn = document.getElementById('plusBtn')

//-------------- When the "+" Button is Clicked --------------//
// When the "+" button is clicked, the value entered in the <input> is added to the count and the new count value displayed.
plusBtn.addEventListener('click', () => {
    let numResultSum = Number(numResult.innerText) + Number(numInput.value)
    numResult.innerText = numResultSum
    if (numResultSum < 0) {
        numResult.style.color = 'red'
    } else {
        numResult.style.color = 'black'
    }
})

//-------------- When the "-" Button is Clicked --------------//
// When the "-" button is clicked, the value entered in the <input> is subtracted from the count and the new count value displayed.
minusBtn.addEventListener('click', () => {
    let nemResultDiff = Number(numResult.innerText) - Number(numInput.value)
    numResult.innerText = nemResultDiff
    if (nemResultDiff < 0) {
        numResult.style.color = 'red'
    } else {
        numResult.style.color = 'black'
    }
})