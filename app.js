document.addEventListener('DOMContentLoaded',domloaded,true); 

function domloaded() {



// variables

const plusButton = document.getElementById('choice1')
const minusButton = document.getElementById('choice2')
var base = 0
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
    console.log(parseInt(base))
    var x = document.getElementById("input").value;
    console.log(x)
    let add = parseInt(x) + parseInt(base)
    document.getElementById("number").innerHTML = add;
    base = add

  })




minusButton.addEventListener('click', (e) => { 
    e.preventDefault()
    console.log(parseInt(base))
    var x = document.getElementById("input").value;
    console.log(x)
    let subtract = parseInt(base) - parseInt(x)
    document.getElementById("number").innerHTML = subtract;
    base = subtract
})





}



