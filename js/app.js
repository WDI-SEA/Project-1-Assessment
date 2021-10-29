

let number = parseInt(document.getElementById('number').innerText)
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const form = document.querySelector('form')
document.getElementById('input').value = 0



plus.addEventListener('click', () => {
    number = number + parseInt(document.getElementById('input').value)
    document.getElementById('number').innerText = number
    if(number < 0 ){
        document.getElementById('number').style.color = 'red'
    }
})

minus.addEventListener('click', () => {
    number = number - parseInt(document.getElementById('input').value)
    document.getElementById('number').innerText = number
    if(number < 0 ){
        document.getElementById('number').style.color = 'red'
    }
})