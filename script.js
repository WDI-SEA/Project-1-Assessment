let add = document.getElementById('plusButt')
let displayNumber = document.getElementById("display")
let inputNumber = document.getElementById("input")
let sub = document.getElementById('minusButt')



add.addEventListener('click', function(){
    displayNumber.innerText = Number(displayNumber.innerText) + Number(inputNumber.value)
})

sub.addEventListener('click', function(){
    displayNumber.innerText = Number(displayNumber.innerText) - Number(inputNumber.value)
})





