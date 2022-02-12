console.log("im on a boat")
//gets the number put in by person
let inputNum = document.getElementById('input-num').value

//add listener for this button
let addButton = document.getElementById('add-button')

//add listener for this button
let minusButton = document.getElementById('minus-button')

//change this depending on what is clicked
let display = document.getElementById('display-num')
let storedNum = inputNum

//i need to get the number every time to check if it changed
console.log(storedNum)
let  getCurrentNum = () => {
  if (storedNum !== inputNum){
    storedNum =inputNum
  }else{
    return
  }
}


// // let displayNum = 

addButton.addEventListener("click", () =>{
  getCurrentNum()
  storedNum++
  display.innerText(storedNum)
  // parseNum(inputNum)++÷
})

// minusButton.addEventListener("click", () =>{
//   getCurrentNum()
//   storedNum--
  
//   // parseNum(inputNum)++÷
// })
