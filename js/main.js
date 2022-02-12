
let newValue = document.getElementById('count');
let calculate = document.getElementById('display');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
let initialValue=0;

add.addEventListener('click', addition(initialValue, newValue => {
    
    let addition = initialValue + newValue;
    return addition
    calculate.innerText = addition;
}));

subtract.addEventListener('click', subtraction(initialValue, newValue => {
  
    let  subtraction = initialValue - newValue;
    return subtraction
    calculate.innerText = subtraction;
}));

