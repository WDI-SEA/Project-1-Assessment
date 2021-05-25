document.addEventListener("DOMContentLoaded", () => {


let numInput = document.getElementById("input").value 
let plusButton = document.getElementById("plus")
let minusButton = document.getElementById("minus")

let num = 0

plusButton.addEventListener("click", (e) =>{
    numInput = document.getElementById("input").value 
    num += parseInt(numInput)

    //not sure why this document.inner text wont work with a variable. I tried to make it more dry, but 
    // ended up having to add this whole line in to keep it working.

    document.getElementById("runningTotal").innerText = num
    if(document.getElementById("runningTotal").innerText == "NaN"){
        num = 1
    }
    if(num>=0){
        document.getElementById("runningTotal").style.color = "black"
    }
    document.getElementById("runningTotal").innerText = num
})



minusButton.addEventListener("click", (e) =>{
    numInput = document.getElementById("input").value 
    num -= parseInt(numInput)
    if(num<0){
        document.getElementById("runningTotal").style.color = "red"
    }
    document.getElementById("runningTotal").innerText = num
    if(document.getElementById("runningTotal").innerText == "NaN"){
        num = 1
    }
})

























})