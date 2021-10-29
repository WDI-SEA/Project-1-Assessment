// Select elements in the DOM.
let countDisplay = document.getElementById("countDisplay")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
let inputBox = document.getElementById("inputBox")

const textColor = () => {
    //display text should be red if value is negative
    if (countDisplay.innerText < 0 ) {
        countDisplay.style.color = "red"
    //display text should be black if value is zero or positive
    } else if (countDisplay.innerText >= 0) {
        countDisplay.style.color = "black"
    }
}

document.addEventListener("click", (e) => {
    //avoid concatenation by conveting values to ints
    let absoluteValue = parseInt(countDisplay.innerText, 10)
    let input = parseInt(inputBox.value, 10)
    //find out which button was clicked
    if (e.target.id === "plus") {
    //increase displayed value by number inside of input
    countDisplay.innerText =  absoluteValue + input
    //ensure text is correct color
    textColor()
    } else if (e.target.id === "minus") {
    //decrease displayed value by number inside of input
    countDisplay.innerText = absoluteValue - input
    //ensure text is correct color
    textColor()
    }
})
