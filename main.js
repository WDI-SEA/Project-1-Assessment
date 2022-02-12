
let addNum = document.querySelector('#addNum')
let subtractNum = document.querySelector('#subtractNum')
let numInput = document.getElementById('numInput')
let result = document.getElementById('result')


addNum.addEventListener('click', () => {
    let resultSum = Number(result.innerText) + Number(numInput.value)
    result.innerText = resultSum
})

subtractNum.addEventListener('click', () => {
    let resultSubtract = Number(result.innerText) - Number(numInput.value)
    result.innerText = resultSubtract
})










// document.addEventListener('DOMContentLoaded', () => {

// })