// declare vars & grab relevant items from html
const answerDiv = document.getElementById("display")
const inputBox = document.getElementById("input")

console.log(answerDiv)
answerDiv.value = 0
// write function that subtracts input from display number and displays result
const subtractNumber = () => {
    answerDiv.value = (+answerDiv.value) - (+inputBox.value)
    console.log(answerDiv.value)
    console.log(inputBox.value)
}

// write function that adds input to display number and displays result
const addNumber = () => {
    answerDiv.value = (+answerDiv.value)+(+inputBox.value)
}

// create click event listener for minus
document.getElementById("minus").addEventListener("click", subtractNumber)
// create click event listener for plus
document.getElementById("plus").addEventListener("click", addNumber)
