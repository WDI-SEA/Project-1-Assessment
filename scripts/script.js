window.addEventListener("DOMContentLoaded", () => {
    let addBtn = document.querySelector("#addButton")
    let subBtn = document.querySelector("#subtractButton")
    let userNum = document.querySelector("#userInput")
    let displayNum = document.querySelector("#result")
    let theNum 
    let currentNum = displayNum.innerText 
    let numAsNum 
    let trueUserNum 
    
    
    addBtn.addEventListener("click", () => {

        numAsNum = parseInt(currentNum)
        trueUserNum = parseInt(userNum.value)
        theNum = userNum.value
        let sum = trueUserNum += numAsNum
        displayNum.innerText = sum
        currentNum = sum
        
   })

   subBtn.addEventListener("click", () => {
        numAsNum = parseInt(currentNum)
        trueUserNum = parseInt(userNum.value)
        theNum = userNum.value
        let sub = numAsNum -= trueUserNum 
        displayNum.innerText = sub
        currentNum = sub
        negNum = parseInt(currentNum)
        if (Math.sign(negNum) === -1) {
            displayNum.style.color = "red"
            console.log(Math.sign(negNum))
        }
   })
})