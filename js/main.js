let total = 0

const add = () => {
    total += numInput.value
    answer.innerText = total
}

const subtract = () => {
    total -= numInput.value
    answer.innerText = total
}

document.addEventListener('DOMContentLoaded', ()=>{
    plus.addEventListener("mouseover", () => {
        plus.style.backgroundColor = "white"
        plus.style.color = "rgb(169,169,169)"
    })
    
    plus.addEventListener("mouseleave", () => {
        plus.style.backgroundColor = "rgb(169,169,169)"
        plus.style.color = "white"
    })
    
    minus.addEventListener("mouseover", () => {
        minus.style.backgroundColor = "white"
        minus.style.color = "rgb(169,169,169)"
    })
    
    minus.addEventListener("mouseleave", () => {
        minus.style.backgroundColor = "rgb(169,169,169)"
        minus.style.color = "white"
    })
    
    plus.addEventListener("click", add)
    minus.addEventListener("click", subtract)
})
