document.addEventListener("DOMContentLoaded", () => {
console.log("Hello! 💕")


// Make Variables
let outPutNumber = document.getElementById('outPutNumber')
let addBtn = document.getElementById('add')
let subBtn = document.getElementById('sub')
let userInput = document.getElementById('userInput')
let total = document.getElementById('total')


// Make + button add to div number
total = 0

addBtn.addEventListener('click', () => {
    console.log("God Save The Queen!👑")
   
   console.log(total)

     function addition() {
        let x = userInput.value
        let z = total.value
        let t = x + z
        total.innerText = t
        console.log(total)
    }
    addition()
})



//Make - button subtract from div number





})