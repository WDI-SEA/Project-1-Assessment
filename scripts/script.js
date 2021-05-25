console.log("Ey yo")

const negButton = document.getElementById("negative-button")
const posButton = document.getElementById("positive-button")
const clearButton = document.getElementById("clear-button")
const numberInput = document.getElementById("number-input")
const numberOutput = document.getElementById("output-box")

posButton.addEventListener("click", () => {
    numberOutput.innerText = parseInt(numberOutput.innerText) + parseInt(numberInput.value)
    colorChange()
})

negButton.addEventListener("click", () => {
    numberOutput.innerText = parseInt(numberOutput.innerText) - parseInt(numberInput.value)
    colorChange()
})

clearButton.addEventListener("click", () => {
    numberInput.value = 1
    numberOutput.innerText = 0
    numberOutput.style.color = "black"
})

function colorChange() {
    if (parseInt(numberOutput.innerText) < 0) {
        numberOutput.style.color = "red"
    } else {
        numberOutput.style.color = "black"
    }
}

