window.addEventListener('DOMContentLoaded', () => {

//DOM Variables
let total = document.querySelector("#total")
let form = document.querySelector("#form")
let add = document.querySelector("#add")
let subtract = document.querySelector("#subtract")
let input = document.querySelector("#inputValue")

//Variables to be used
let totalNumber = 0


//Function for addition and subtraction then .innerHTML

add.addEventListener('click', (e) => {
    e.preventDefault()
    let inputValue = parseInt(input.value)
    totalNumber += inputValue
    total.innerHTML = totalNumber
}) 

subtract.addEventListener('click', (e) => {
    e.preventDefault()
    let inputValue = parseInt(input.value)
    totalNumber -= inputValue
    total.innerHTML = totalNumber
})

})