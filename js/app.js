let plusSignBtn = document.querySelector("#plus-sign")
let minusSignBtn = document.querySelector("#minus-sign")
let inputBox = document.querySelector("input")
let displayText = document.querySelector("#large-indicator")

plusSignBtn.addEventListener("click", upIncrementBy)
minusSignBtn.addEventListener("click", downIncrementBy)

function downIncrementBy (e) {
    let subtractForm = parseInt(displayText.innerText)
    let newDisplay = subtractForm -= inputBox.value
    displayText.innerText = newDisplay
    console.log("click")


    if (newDisplay > -1){
        displayText.style.color = "black";
    } else {
        displayText.style.color = "red";
    }


}

function upIncrementBy (e) {
    e.preventDefault()
    let addForm = parseInt(displayText.innerText)
    let newDisplay2 = addForm += parseInt(inputBox.value)
    displayText.innerText = newDisplay2
    console.log("click")

    if (newDisplay > -1){
        displayText.style.color = "black";
    } else {
        displayText.style.color = "red";
    }
}

