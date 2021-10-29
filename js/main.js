// Define variables that hold application state, cache DOM elements, hold lookup data (constants), etc.
// Select elements in the DOM.
let countDisplay = document.getElementById("countDisplay")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
let inputBox = document.getElementById("inputBox")
// Manipulate a DOM element's content and style.

console.log("Hello HTML")



// When the "+" button is clicked, 
//the value entered in the <input> is 
// added to the count and the new count value displayed.

// When the "-" Button is Clicked
// he value entered in the <input> is 
// subtracted from the count and the new count value displayed.

// Hovering Over the "+" or "-" Button
// When the mouse is over the "+" or "-" button, the button should reverse its background and text colors:

// As a bonus, display the count in red if it is a negative value!






// Listen for browser events, such as click, being dispatched by DOM elements.
document.addEventListener("mouseover", (e) => {
    if (e.target.innerText === "+" || e.target.innerText === "-") {

    }
})



document.addEventListener("click", (e) => {
    let absoluteValue = parseInt(countDisplay.innerText, 10)
    let input = parseInt(inputBox.value, 10)

    if (e.target.id === "plus") {
    countDisplay.innerText =  absoluteValue + input
    } else if (e.target.id === "minus") {
    countDisplay.innerText = absoluteValue - input
    }
})
