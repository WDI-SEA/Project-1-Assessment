// console.log("i am linked")

// const plusButton = document.getElementById("plus");
// const minusButton = document.getElementById("minus");
const inputNumber = document.getElementById("input");
const numberDisplayed = document.getElementById("number-displayed");


const plusButton = () => {
    // numberDisplayed.innerText = numberDisplayed.innerText + inputNumber.innerText 
    // console.log(numberDisplayed.innerText, inputNumber.value)
    numberDisplayed.innerText = Number(numberDisplayed.innerText) + Number(inputNumber.value);

    changeTextColor();
}

const minusButton = () => {
    numberDisplayed.innerText = Number(numberDisplayed.innerText) - Number(inputNumber.value);
    console.log(numberDisplayed.innerText == Number(numberDisplayed.innerText))

    changeTextColor();

}


const changeTextColor = () => numberDisplayed.style.color = numberDisplayed.innerText < 0 ? 'red' : 'black'
// const changeTextColor = () => {
//     if (numberDisplayed.innerText < 0) {
//         numberDisplayed.style.color = "red";
//     }
//     if (numberDisplayed.innerText >= 0) {
//         numberDisplayed.style.color = "black";
//     }

// }



