const counter = document.querySelector('#count-display')
const plusBtn = document.querySelector('#plus-btn')
const minusBtn = document.querySelector('#minus-btn')
const numInput = document.querySelector('input')

//add
let addNum = plusBtn.addEventListener('click', () => {
    numInput.value = parseInt(numInput.value) + 1
    counter.innerHTML = numInput.value + 
})



//subtract
let minusNum = minusBtn.addEventListener('click', () => {
    numInput.value = parseInt(numInput.value) - 1
    counter.innerHTML = numInput.value

})

// //change counter
// addNum(e) => {

// }


// if (addNum() => {
//     counter.textContent = addNum
// }) if (minusNum() => {
//     content.textContent = minusNum
// })
