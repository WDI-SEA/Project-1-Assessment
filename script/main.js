
let plusButton = document.getElementById("plus")
let total = document.getElementById("totalNum")
let minusButton = document.getElementById("minus")
let textInput = document.getElementById("input")




console.log(typeof parseInt(total.innerText))
console.log(typeof parseInt(textInput.value))



let plus = plusButton.addEventListener("click", ()=>{

    total.innerText = parseInt(total.innerText) + parseInt(textInput.valueAsNumber)

    if (parseInt(total.innerText) >= 0){
        console.log("hello")
        total.style.color = "black"
    }
    // this second if statement is for an edge case where f a player adds a negative number and the total is below 0.
    if (parseInt(total.innerText) < 0){
        console.log("hello")
        total.style.color = "red"
    }
    return total.innerText
    

})

let minus = minusButton.addEventListener("click", ()=>{
    
    total.innerText = parseInt(total.innerText) - parseInt(textInput.valueAsNumber)
    
    if (parseInt(total.innerText) < 0){
        console.log("hello")
        total.style.color = "red"
    }
        // this second if statement is for an edge case where f a player subtracts a poistive number and the total is below 0.
    if (parseInt(total.innerText) >= 0){
        console.log("hello")
        total.style.color = "black"
    }
    return total.innerText

})

