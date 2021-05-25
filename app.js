window.addEventListener("DOMContentLoaded", () => {
    const plusButton = document.getElementById("plus")
    const minusButton = document.getElementById("subtract")
    let inputField = document.getElementById("quantity")
    let displayNum = document.getElementById("displayNum")
    displayNum.value = 0
    
    function inputMathPlus(event) {
        event.preventDefault()
        let total = parseInt(inputField.value) + parseInt(displayNum.value)
        displayNum.value = total
        displayNum.innerText = total
    }
    
    function inputMathMinus(event) {
        event.preventDefault()
        let total = parseInt(inputField.value) - parseInt(displayNum.value)
        displayNum.value = total
        displayNum.innerText = total
    }
    
    plusButton.addEventListener("click", inputMathPlus)
    minusButton.addEventListener("click", inputMathMinus)
    
    })