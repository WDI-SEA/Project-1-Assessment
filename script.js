let amount = 0
let deltaNum = 1
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let deltaDom = document.getElementById('deltaNum')


function add (deltaNum) {
    amount + deltaNum
    return amount
}

function subtract (deltaNum) {
    amount - deltaNum
    return amount
}

document.addEventListener('click', (e) => {
    if (e.target === plus) {
        console.log('test')
    }
})
