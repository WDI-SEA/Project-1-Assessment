//take user input
//check if it's a number
//add or subtract it to previous value
//display new value
//color red if negative

let newTotal = 0

const numCheck = () => {
    return Number(userInput.value)
}

const posOrNeg = () => {
    if (newTotal < 0) {
        displayNum.style.color = 'red'
    } else {
        displayNum.style.color = 'black'
    }
}

const badInput = () => {
    message.innerText = 'Please enter a number'
}

document.getElementById('add').addEventListener('click', (e) => {
    if (numCheck()) {
        message.innerText = ''
        newTotal += Number(userInput.value)
        posOrNeg()
        displayNum.innerText = newTotal
        userInput.value = ''
    } else {
        badInput()
    }
})

document.getElementById('subtract').addEventListener('click', (e) => {
    if (numCheck()) {
        message.innerText = ''
        newTotal -= Number(userInput.value)
        posOrNeg()
        displayNum.innerText = newTotal
        userInput.value = ''
    } else {
        badInput()
    }
})