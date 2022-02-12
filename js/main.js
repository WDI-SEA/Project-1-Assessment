let numberTracker = 0;
let numberTrackerDOM = document.querySelector('#number-tracker');
let numberInput = document.querySelector('#number-input').valueAsNumber
let plusButton = document.querySelector('#plus')
let minusButton = document.querySelector('#minus')

numberTrackerDOM.innerText = numberTracker

const add = () => {
    // let numberInput = document.getElementById('number-input').value 
    numberTracker = numberTracker + numberInput
    numberTrackerDOM.innerText = numberTracker
}

plusButton.addEventListener("click", add)

const sub = () => {
    // let numberInput = document.getElementById('number-input').value 
    numberTracker = numberTracker - numberInput
    numberTrackerDOM.innerText = numberTracker
}
minusButton.addEventListener("click", sub)

// add()

// plusButton.addEventListener("click", function() {
//     // let numberInput = document.getElementById('#number-input').value
//     console.log(numberInput)
//     numberTrackerDOM.innerText = numberInput
//     // numberTracker = numberInput + numberTracker
// })
