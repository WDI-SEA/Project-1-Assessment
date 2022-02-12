console.log("im on a boat")


let inputNum = document.getElementById('input-num').value
let addButton = document.getElementById('add-button')
let minusButton = document.getElementById('minus-button')
let displayNum = document.getElementById('display-num')
let storedNum = inputNum
let num = null

let checkChange = () => {
  let newNum = document.getElementById('input-num').value
  if (storedNum === newNum){
    console.log('same!')
  }else{
    storedNum = newNum
    num = storedNum
    console.log('newnum!')
  }
}

// addButton.addEventListener('click', add => {
//   console.log('rar')
//   checkChange()
//   console.log(storedNum)
//   console.log(num)
// })

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
  num--
  display()
})

addButton.addEventListener('click', add => {  
  checkChange();
  console.log(num)
  num++
  display()

})


document.addEventListener('DOMContentLoaded', () => {
  num = 0
  // minusButton.addEventListener('click', minus)
})


// any button is clicked u get value of inputNum and store it 

// if inputnumber is different than stored num... store that num as the input number





// //gets the number put in by person
// let inputNum = null
// //add listener for this button
// let addButton = document.getElementById('add-button')

// //add listener for this button
// let minusButton = document.getElementById('minus-button')

// //change this depending on what is clicked
// let display = document.getElementById('display-num')
// let storedNum = null
// let changedNum = Number(storedNum)





// let getInputNum = () => {
//   console.log('rar')
//   inputNum = document.getElementById("input-num").value;
//   if (inputNum !== storedNum){
//     storedNum = inputNum 
//   } else {
//     return
//   }
// }

// let add = () => {
//   changedNum++
// }


// addButton.addEventListener = ("click", add => {
//   if (inputNum !== storedNum){

  // }
// })



//i need to get the number every time to check if it changed

// // // let displayNum = 

// addButton.addEventListener("click", () =>{
//   getInputNum()
//   console.log(newNum++)
  // storedNum++
  // display.innerText(storedNum)
  // parseNum(inputNum)++÷
// })

// minusButton.addEventListener("click", () =>{
//   getCurrentNum()
//   storedNum--
  
//   // parseNum(inputNum)++÷
// })
