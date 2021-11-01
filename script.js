const result = document.getElementById("result")
const subtract = document.getElementById("subtract")
const inputNum = document.getElementById("inputr")
const add = document.getElementById("add")
result.innerText = 0
let resultNum = 0


console.log(typeof inputNum)



const increase = () => {
    let toNum = parseInt(inputNum.value, 10)
    resultNum = resultNum + toNum
    result.innerText = resultNum
}



const decrease = () => {
    let toNum = parseInt(inputNum.value, 10)
    resultNum = resultNum - toNum
    result.innerText = resultNum
    }


add.addEventListener("click", increase)
subtract.addEventListener("click", decrease)
// subtract.addEventListener("click", decrease)