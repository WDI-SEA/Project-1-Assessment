// declare vars & grab relevant items from html

let answerDisplay = document.getElementById("display")
const minusButton = document.getElementById("minus")
const plusButton = document.getElementById("plus")
let inputNumber = document.getElementById("inputbox")


// write function that subtracts input from display number and displays result

// write function that adds input to display number and displays result


// create click event listener for minus
minusButton.addEventListener("click", subtractNumber())
// create click event listener for plus
plusButton.addEventListener("click", addNumber())