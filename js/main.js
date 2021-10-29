

function minusFunction() {
    console.log('it works')
    let enteredNumber = parseInt(document.getElementById("inputValue").value)
    let countedNumber = parseInt(document.getElementById('counted').value)
        console.log('buttonclicked')
        let finalValue = countedNumber - enteredNumber
        document.getElementById("counted").value = finalValue
        console.log(enteredNumber)
        console.log(countedNumber)
}

function addFunction() {
    console.log('it works')
    let enteredNumber = parseInt(document.getElementById("inputValue").value)
    let countedNumber = parseInt(document.getElementById('counted').value)
        console.log('buttonclicked')
        let finalValue = countedNumber + enteredNumber
        document.getElementById("counted").value = finalValue
        console.log(enteredNumber)
        console.log(countedNumber)
}



document.getElementById('minus').addEventListener('click',minusFunction)
document.getElementById('plus').addEventListener('click',addFunction)

