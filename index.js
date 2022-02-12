let numberDisplay = document.getElementById("numberDisplay")
const decrement = document.getElementById("minus")
const increment = document.getElementById("plus")
const inputDisplay = document.getElementById("numInput")
let number = 0
numberDisplay.innerText = number

inputDisplay.addEventListener("input", ()=>{
    console.log(inputDisplay.value)
})

decrement.addEventListener("click", () => {
    let num = inputDisplay.value
    number -= num * 1
    numberDisplay.innerText = number

    if (number < 0) {
        numberDisplay.style.color = "red"
    } 
})

increment.addEventListener("click", () => {
    let num = inputDisplay.value
    number += num * 1
    numberDisplay.innerText = number
    // inputDisplay.innerText =""

    if(number >= 0){
        numberDisplay.style.color = "black"
    }
})
