let amount = 0
let deltaNum = 1
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let deltaDom = document.getElementById('deltaNum')
let button = document.querySelector('button')


function add (deltaNum) {
    amount + deltaNum
    return amount
}

function subtract (deltaNum) {
    amount - deltaNum
    return amount
}

function clickHandler (e) {
    if (e.target === minus) {
        console.log('minus')
    }
    if (e.target === plus) {
        console.log('plus')
    }
}

document.addEventListener('click', (e) => {
clickHandler(e)
})
