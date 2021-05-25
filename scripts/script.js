console.log("Ey yo")

const negButton = document.getElementById("negative-button")
const posButton = document.getElementById("positive-button")
const numberInput = document.getElementById("number-input")
const numberOutput = document.getElementById("output-box")

// console.log(numberOutput)
// console.log(numberInput)
// console.log(parseInt(numberOutput.innerText))


posButton.addEventListener("click", () => {
    console.log("It goes up!")
    numberOutput.innerText = parseInt(numberOutput.innerText) + parseInt(numberInput.value)
})

negButton.addEventListener("click", () => {
    console.log("It goes down!")
    numberOutput.innerText = parseInt(numberOutput.innerText) - parseInt(numberInput.value)
})

