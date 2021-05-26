let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let deltaDom = document.getElementById('deltaNum')
let amountDisplay = document.getElementById('numberBox')
let reduceArr


finalAmount = [0]

const reducer = (a, b) => (a + b)

document.addEventListener('click', (e) => {
    clickHandler(e)
})

function displayAmount () {
   reduceArr = finalAmount.reduce(reducer)
   amountDisplay.innerText = reduceArr
}


function clickHandler (e) {
    if (e.target === plus) {
        finalAmount.push(parseInt(deltaDom.value))
        displayAmount()
        console.log(finalAmount)
    }
    if (e.target === minus) {
       let minusValue =  parseInt(deltaDom.value) * -1
       finalAmount.push(minusValue)
       displayAmount()
    }
}

