console.log("im on a boat")

//completely read the prompts wrong. >.> redoing my js page


let inputNum = document.getElementById('input-num').value
let n = parseInt(inputNum)
let addButton = document.getElementById('add-button')
let minusButton = document.getElementById('minus-button')
let displayNum = document.getElementById('display-num')
let storedNum = n
let num = null



let checkChange = () => {
  let newNum = document.getElementById('input-num').value
  let n = parseInt(newNum)
  newNum = n
  if (storedNum === newNum){
    console.log('same!')
  }else{
    storedNum = newNum
    console.log('newnum!')
  }
}

let display = () => {
  
  if(num < 0){
    displayNum.style.color = "red"
  }else{
    displayNum.style.color="black"
    
  }
  displayNum.innerText = num;
}
minusButton.addEventListener('click', minus => {  
  checkChange();
  console.log(num)
  num = num - storedNum
  console.log(num)
  display()
})

addButton.addEventListener('click', add => {  
  checkChange();
  console.log(num)
  num = num + storedNum
  display()

})


document.addEventListener('DOMContentLoaded', () => {
  num = 0
  // minusButton.addEventListener('click', minus)
})
