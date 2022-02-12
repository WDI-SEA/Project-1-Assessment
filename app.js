const addButton = document.getElementById('add-number')
const subtractButton = document.getElementById('subtract-number')
let topNumDisplay = document.getElementById('top-number')
let numInput = document.querySelector('input')

let topNum = 0
numInput.valueAsNumber = numInput.innerText

const addNumbers = () => {
    topNum = numInput.valueAsNumber + topNum
    topNumDisplay.innerText = topNum
}

addButton.addEventListener('click', addNumbers)




const subtractNumbers = () => {
    topNum = topNum - numInput.valueAsNumber
    topNumDisplay.innerText = topNum
}

subtractButton.addEventListener('click', subtractNumbers)
