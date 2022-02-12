// DOM Selector Elements

// Add Button (Adds the numberInput to the outputBox)
const addButton = document.querySelector("#add")
// Minus Button (Subtracts the numberInput to  the outputBox)
const minusButton = document.querySelector("#minus")
// Player can enter a number
const numberInput = document.querySelector("#numberInput")
// Display the number on the outputBox
const outputBox = document.querySelector("#outputBox")

let number = 0
outputBox.innerText = number

// ADD FUNCTION 
function add () {
    number =  Number(number) +  Number(numberInput.value);
    outputBox.innerText = number;
    if (number >= 0) {
        outputBox.style.color = "black";
    } else {
        outputBox.style.color = "red";
    }
}


// MINUS FUNCTION
function minus () {
    number = Number(number) - Number(numberInput.value);
    outputBox.innerText = number;
    if (number >= 0) {
        outputBox.style.color = "black";
    } else {
        outputBox.style.color = "red";
    }
}

// EVENT KEY LISTENERS
addButton.addEventListener('click', add);
minusButton.addEventListener('click', minus);


