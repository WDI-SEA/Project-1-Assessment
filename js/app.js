 // addition function
 const addition = () => {
    const inputValue = parseInt(userInput.value)
    const currentValue = parseInt(count.innerText)
    const result = currentValue + inputValue
    count.innerText = result
    if (result < 0) {
        count.style.color = "red"
    } else {
        count.style.color = "black"
    }
}
//subtraction function
const subtraction = () => {
    const inputValue = parseInt(userInput.value)
    const currentValue = parseInt(count.innerText)
    const result = currentValue - inputValue
    count.innerText = result
    // if result is less than 0, font = red
    if (result < 0) {
        count.style.color = "red"
    } else {
        count.style.color = "black"
    }
}

//once content loads
document.addEventListener("DOMContentLoaded", () => {
    // plus div
    plus.addEventListener("click", () => {
        addition()
    })
    //minus div 
    minus.addEventListener("click", () => {
        subtraction()
    })
})