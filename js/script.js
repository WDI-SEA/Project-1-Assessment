window.addEventListener("DOMContentLoaded", () => {

     // DOM elements
     const numbers = document.getElementById("numbers")
     const addBtn = document.getElementById("add")
     const subtractBtn = document.getElementById("subtract") 
     
// functions
     addBtn.addEventListener("click", (e) => {
            e.preventDefault()
            let input =  parseInt(document.getElementById("input").value) 
            let integer = parseInt(numbers.innerHTML)     
            let addedNumber = (input + integer)
            numbers.innerHTML = addedNumber
            if(addedNumber >= 0) {
                numbers.style.color = "black"
            } 
            
     })
 
 
     subtractBtn.addEventListener("click", (e) => {
        e.preventDefault()
        let input =  parseInt(document.getElementById("input").value) 
        let integer = parseInt(numbers.innerHTML)     
        let subNumber = (integer - input)
        numbers.innerHTML = subNumber
            if(subNumber < 0) {
                numbers.style.color = "red"
            }
     })

})
  

   


