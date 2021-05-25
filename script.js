console.log("we're connected now!")
const input = document.querySelector('#inputNumber')
const buttonPlus = document.querySelector('#buttonPlus')
const buttonMinus = document.querySelector('#buttonMinus')
const outputValue = document.querySelector('#outputValue')

//prevent default +
function incrementValue(e) {
    e.preventDefault();
    var buttonPlus = document.getElementById("buttonPlus");
    buttonPlus.value = (inputNumber.value) + (inputNumber.value);
    var outputValue = (inputNumber.value) + (inputNumber.value);
   
  
    
  }
  
  // prevent default -
  function decrementValue(e) {
    e.preventDefault();
    var buttonMinus = document.getElementById("buttonMinus");
    buttonMinus.value = (inputNumber.value) - (inputNumber.value);
    var outputValue = (inputNumber.value) - (inputNumber.value);
    

  }   
  