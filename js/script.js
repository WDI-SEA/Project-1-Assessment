const plusBtn = document.querySelector("#plusBtn")
const numInput = document.querySelector("#numInput")
const minusBtn = document.querySelector("#minusBtn")
const display = document.querySelector("#display")

let displayVal = 0




document.addEventListener("DOMContentLoaded", function(){
    display.innerText = Number(displayVal) 
    plusBtn.addEventListener("click",addToDisplay)
    minusBtn.addEventListener("click",subtractToDisplay)
})

function addToDisplay() {      
    displayVal = displayVal + Number(numInput.value)
    negativeCheck(displayVal)
    display.innerText = displayVal
}

function subtractToDisplay() {
    displayVal = displayVal - Number(numInput.value)
    negativeCheck(displayVal)
    display.innerText = displayVal
}

function negativeCheck(num){
    if (num < 0 ){
        display.classList.add("negNum")
    } else {
        display.classList.remove("negNum")
    }
}