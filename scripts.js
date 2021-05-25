window.addEventListener('DOMContentLoaded', () => {

//DOM Variables
let total = document.querySelector("#total")
let form = document.querySelector("#form")
let add = document.querySelector("#add")
let subtract = document.querySelector("#subtract")

//Variables to be used
let totalNumber = 0


//Function for addition and subtraction then .innerHTML

add.addEventListener('click', (e) => {
    e.preventDefault()
    let inputValue = parseInt(document.querySelector("#inputValue").value)
    let sum
    sum = totalNumber += inputValue
    total.innerHTML = sum
    console.log(sum)
})

subtract.addEventListener('click', (e) => {
    e.preventDefault()
    let inputValue = parseInt(document.querySelector("#inputValue").value)
    let diff
    diff = totalNumber -= inputValue
    total.innerHTML = diff
})

})