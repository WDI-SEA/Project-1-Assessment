let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let deltaDom = document.getElementById('deltaNum')
let button = document.querySelector('button')
let amountDisplay = document.getElementById('numberBox').innerText
let userInput = deltaDom.value
let reduceArr


finalAmount = [0]

const reducer = (a, b) => (a + b)

document.addEventListener('click', (e) => {
    clickHandler(e)
})

function displayAmount () {
   reduceArr = finalAmount.reduce(reducer)
   console.log(reduceArr)
}




function clickHandler (e) {
    if (e.target === plus) {
        finalAmount.push(parseInt(deltaDom.value))
        displayAmount()
        console.log(finalAmount)
    }
    if (e.target === minus) {
        console.log('minus')
    }
}


// let amount = document.querySelector('numberBox').innerText
// let deltaNum = 1
//     deltaNum = userInput

// function adjustHandler (input) {
//     input = UserInput
//     add(input)
//     subtract(input)
// }


// function subtract (deltaNum) {
//     amount - deltaNum
//     return amount
// }