 // addition function
 const addition = () => {
    let inputValue = parseInt(userInput.value)
    let currentValue = parseInt(count.innerText)
    let result = currentValue + inputValue
    count.innerText = result
      // if result is less than 0, font = red
    if (result < 0) {
        count.style.color = "red"
      // if result is greater than 0, font = black
    } else {
        count.style.color = "black"
    }
}
//subtraction function
const subtraction = () => {
    let inputValue = parseInt(userInput.value)
    let currentValue = parseInt(count.innerText)
    let result = currentValue - inputValue
    count.innerText = result
    if (result < 0) {
        count.style.color = "red"
    } else {
        count.style.color = "black"
    }
}

//once content loads
document.addEventListener("DOMContentLoaded", () => {
    // + div event listener
    plus.addEventListener("click", () => {
        addition()
    })
    // - div event listener
    minus.addEventListener("click", () => {
        subtraction()
    })
})