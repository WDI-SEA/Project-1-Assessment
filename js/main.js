let input = document.getElementById('input')
let counter = document.getElementById('counter')

function subtract (){
    counter.innerText=(parseInt(counter.innerText)) - (parseInt(input.value))
    console.log('wiener')
}
function add () {
    counter.innerText= (parseInt(counter.innerText)) + (parseInt(input.value))
    console.log('ashle')
}
let neg = document.getElementById('neg');
let pos = document.getElementById('pos');

    neg.addEventListener('click', subtract)
    
    pos.addEventListener('click', add)