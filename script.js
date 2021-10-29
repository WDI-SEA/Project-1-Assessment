const number = document.getElementById("counter")
const minus = document.getElementById("subtract")
const inputNum = document.getElementById("input").value
const adding = document.getElementById("adder")
let initalValue = 0



const showNumber = () => {
    number.innerText = 0
}
showNumber()



const increase = (e) => {
    console.log(e.target)
    e.target.adding
    number.innerText++

}
const decrease = (e) => {
    console.log(e.target.minus)
    e.target.minus
    number.innerText--
}

function myFunction() {
    document.getElementById("myText").value = "Johnny Bravo";
}









adder.addEventListener("click", increase)
subtract.addEventListener("click", decrease)