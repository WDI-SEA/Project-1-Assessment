// variables
let userPage = document.getElementById("page")
let subtract = document.getElementById("subBtn")
let add = document.getElementById("addBtn")
let userInput = document.getElementById("input")
let currentNumber = document.getElementById("total")
let inputIndex = 0

// click events
add.addEventListener("click", (e) => {
    e.preventDefault();
    let input = parseInt(userInput.value)
    let a = parseInt(currentNumber.innerText)
    let total = a+input
    currentNumber.innerText = total   
})    

subtract.addEventListener("click", (e) => {
    e.preventDefault();
    let input = parseInt(userInput.value)
    let a = parseInt(currentNumber.innerText)
    let total = a-input
    currentNumber.innerText = total
})

