document.addEventListener("DOMContentLoaded", () => {
    // SELECTORS
    const sum = document.querySelector("#sum")
    const diff = document.querySelector("#difference")
    let inputForm = document.querySelector(".form")
    let containerDiv = document.querySelector(".math-container")
    let inputNum = document.querySelector("#input")

    // COUNTER
    let number = 0
    containerDiv.innerText = number

    // sum button on click should add value to display

    sum.addEventListener("click", (e)=>{
        e.preventDefault()
        // retrieve value from input
        // for some reason my input and counter are producing strings and concatenating them so i googled a fix but it's never happened to me before
        number = +number + +inputNum.value 
        
        change()
    })

    // diff button on click should subtract from display

    diff.addEventListener("click", (e)=>{
        e.preventDefault()

        number = +number - +inputNum.value
        change()
    })

    function change(){
        // push math to div
        containerDiv.innerText = number
        
        //color change
        if (number < 0) {
            containerDiv.style.color = "red"
        } else {
            containerDiv.style.color = "black"
        }
    }
})