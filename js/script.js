plusButton = document.querySelector(".increment-button")
minusButton = document.querySelector(".decrement-button")
inputNumber = document.querySelector("#number-input")
changingNumber = document.querySelector("#number-to-change")

let startingNum = 0

plusButton.addEventListener("click", () => {
    startingNum += parseInt(inputNumber.value)
    changeText(`${startingNum}`)
    negativeCheck(startingNum)
})
plusButton.addEventListener("mouseover",()=>{
    
})
minusButton.addEventListener("mouseover",()=>{

})
minusButton.addEventListener("click", () => {
    startingNum -= parseInt(inputNumber.value)
    changeText(`${startingNum}`)
    negativeCheck(startingNum)
})

const changeText = (string) => {
    changingNumber.innerText = string
}

const negativeCheck = (num) => {
    if (num < 0) {
        changingNumber.style.color = "red"
    } else {
        changingNumber.style.color = "black"
    }
}

const flipColor = (element) =>{
    element.style.color
}
