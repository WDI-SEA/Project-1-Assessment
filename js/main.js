/***********
 * GLOBALS *
 ***********/

const outputEle = document.querySelector("#js-output")
const incrementBtn = document.querySelector("#js-increment-btn")
const decrementBtn = document.querySelector("#js-decrement-btn")
const numberInput = document.querySelector("#js-number-input")

let currentValue = 0

/*************
 * FUNCTIONS *
 *************/

const changeOutput = (number) => (outputEle.innerText = number)

const increment = (amount) => (currentValue += amount)
const decrement = (amount) => (currentValue -= amount)

const getInputValue = () => {
  return +numberInput.value
}

const updateAndDisplayValue = (shouldAdd) => {
  let operator
  if (shouldAdd) operator = increment
  else operator = decrement

  changeOutput(operator(getInputValue()))

  if (currentValue < 0) outputEle.classList.add("negative")
  else outputEle.classList.remove("negative")
}

const incrementHandler = () => updateAndDisplayValue(true)
const decrementHandler = () => updateAndDisplayValue(false)

incrementBtn.addEventListener("click", incrementHandler)
decrementBtn.addEventListener("click", decrementHandler)

/*********
 * SETUP *
 *********/

numberInput.value = 1
