document.addEventListener("DOMContentLoaded", () => {
console.log("Hello! 💕")


// Make Variables
let outPutNumber = document.getElementById('outPutNumber')
let addBtn = document.getElementById('add')
let subBtn = document.getElementById('sub')
let userInput = document.getElementById('userInput')
let total = document.getElementById('total')


// Make + button add to p number
// total = 0

addBtn.addEventListener('click', () => {
    console.log("God Save The Queen!👑")

     function addition() {
        let x = parseInt(userInput.value)
        console.log(x)
        let z = parseInt(total.innerText)
        console.log(z)
        let t = x + z
        total.innerText = t
        console.log(total)
    }
    addition()
})

//Make - button subtract from p number

subBtn.addEventListener('click', () => {

    function subtraction() {
        let x = parseInt(userInput.value)
        console.log(x)
        let z = parseInt(total.innerText)
        console.log(z)
        let t = z - x
        total.innerText = t
        console.log(total)
    }
    subtraction()
})




})