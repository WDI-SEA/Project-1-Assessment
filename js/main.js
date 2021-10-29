// declare vars & grab relevant items from html
const answerDisplay = document.getElementById("display")
const minusButton = document.getElementById("minus")
const plusButton = document.getElementById("plus")
const inputBox = document.getElementById("input")

answerDisplay.innerText = 0
// write function that subtracts input from display number and displays result
const subtractNumber = () => {
    answerDisplay.innerText = (answerDisplay.innerText)-(inputBox.innerText)
}

// write function that adds input to display number and displays result
const addNumber = () => {
    answerDisplay.innerText = (answerDisplay.innerText)+(inputBox.innerText)
}

// create click event listener for minus
minusButton.addEventListener("click", subtractNumber)
// create click event listener for plus
plusButton.addEventListener("click", addNumber)