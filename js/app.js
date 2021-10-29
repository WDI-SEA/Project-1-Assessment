

let number = parseInt(document.getElementById('number').innerText)
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const form = document.querySelector('form')



plus.addEventListener('click', () => {

    number = number + parseInt(document.getElementById('input').value)
    document.getElementById('number').innerText = number

})

minus.addEventListener('click', () => {
    number = number - parseInt(document.getElementById('input').value)
    document.getElementById('number').innerText = number
})
