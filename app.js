
//DOM variables
let number = document.getElementById("original").innerHTML
//let newNumber = document.querySelector(".new-sum").value
const minusButton = document.getElementById("minus-num")

const minus = () => {
    let inputNumber = document.getElementById("num-input").value
    let number2 = parseFloat(number)
    //console.log(number)
    //console.log(number2)
    let inputNumber2 = parseFloat(inputNumber)
    //console.log(inputNumber)
    //console.log(inputNumber2)
    let newNumber = number2 - inputNumber2
    console.log(newNumber + " new number")
    document.querySelector(".new-sum").innerHTML = newNumber

}

const plus = () => {
    //let tempNum = parseFloat(inputNumber)
    let newNumber = number + inputNumber
    document.querySelector(".new-sum").innerHTML = newNumber
}

//once page loads
document.addEventListener("DOMContentLoaded", () => {
    //subtraction
    form1.addEventListener("submit", (e) => {
        e.preventDefault()
        minus()
    })
    //addition
    form2.addEventListener("submit", (e) => {
        e.preventDefault()
        plus()
    })
})