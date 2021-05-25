document.addEventListener('DOMContentLoaded',domloaded,true); 

function domloaded() {



// variables

const plusButton = document.getElementById('choice1')
const minusButton = document.getElementById('choice2')
var base = 50
document.getElementById("number").innerText=`${base}`
// console.log(base)

var userInput = document.getElementById('input');


// let userInput = document.getElementById("input").value
document.getElementById('number').addEventListener('input', function() {
    console.log(this.value);
});

// functions

plusButton.addEventListener('click', (e) => {
    
    e.preventDefault()
    
    base = base + 10
    document.getElementById("number").innerText=`${base}`
    
  })
minusButton.addEventListener('click', (e) => { 
    e.preventDefault() 
    base = base - 10
    document.getElementById("number").innerText=`${base}`
    
  
})





}



