let newValue = document.getElementById('newValue')
const addBtn = document.getElementById('add')
const minusBtn = document.getElementById('subtract')
let userValue = document.getElementById('value').valueAsNumber

console.log(userValue)

let count = 0

addBtn.addEventListener("click", function() {
    let userValue = document.getElementById('value').valueAsNumber
    console.log(count)
    count = count + userValue;
    console.log(count)
    console.log(userValue)
    newValue.innerText = `${count}`
    console.log(`you clicked me`);
    if(count<=0){newValue.classList.add('red')}else{newValue.classList.remove('red')}
    return count
  });

  console.log(count)

  minusBtn.addEventListener("click", function() {
    let userValue = document.getElementById('value').valueAsNumber
    console.log(count);
    count = count - userValue;
    console.log(count);
    console.log(userValue);
    newValue.innerText = `${count}`;
    console.log(`you clicked me`);
    if(count<=0){newValue.classList.add('red')}else{newValue.classList.remove('red')}
    return count;
    
  });
