console.log("we're connected now!")
const inputNumber = document.querySelector('#inputNumber')
// const buttonPlus = document.querySelector('#buttonPlus')
const buttonMinus = document.querySelector('#buttonMinus')
const outputValue = document.querySelector('#outputValue')
let finalValue = 0

//prevent default +
function incrementValue(e) {
    e.preventDefault();
      finalValue += parseInt(inputNumber.value)
  outputNum()
    console.log(finalValue)
  }
  document.getElementById("buttonPlus").addEventListener("click", incrementValue)
  function outputNum() {
outputValue.innerHTML = finalValue
  }

  
  // prevent default -
function decrementValue(e) {
    e.preventDefault();
        finalValue -= parseInt(inputNumber.value)
    outputNum()
        console.log(finalValue)
  }   
  document.getElementById("buttonMinus").addEventListener("click", decrementValue)
  function outputNum() {
outputValue.innerHTML = finalValue
  }