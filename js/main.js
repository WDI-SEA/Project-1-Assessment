/****************
* DOM SELECTORS *
****************/

const plusButton = document.querySelector('#plus-button')
const minusButton = document.querySelector('#minus-button')
const userInput = document.querySelector('#user-input')
const output = document.querySelector('#output')

/****************
*EVENT LISTENERS*
****************/

plusButton.addEventListener('click', function () {
    output.innerText = Number(output.innerText) + Number(userInput.value)
    if((Number(output.innerText)) < 0){
        output.style.color="red"
    }
})
minusButton.addEventListener('click', function(){
    output.innerText = Number(output.innerText) - Number(userInput.value)
    console.log(Number(output.innerText))
    if((Number(output.innerText)) < 0){
        output.style.color="red"
    }
})

plusButton.addEventListener('mouseenter', function(){
    plusButton.style.backgroundColor="white";
    plusButton.style.color="darkgrey";
})
minusButton.addEventListener('mouseenter', function(){
    minusButton.style.backgroundColor="white";
    minusButton.style.color="darkgrey";
})
plusButton.addEventListener('mouseleave', function(){
    plusButton.style.backgroundColor="darkgrey";
    plusButton.style.color="white";
})
minusButton.addEventListener('mouseleave', function(){
    minusButton.style.backgroundColor="darkgrey";
    minusButton.style.color="white";
})

