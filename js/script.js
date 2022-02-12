const result = document.getElementById('result')
const numInput = document.getElementById('input')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')

addBtn.addEventListener('click', plus)
subBtn.addEventListener('click', minus)

function plus() {
    result.innerText = Number(result.innerText) + Number(numInput.value)
    color()
}

function minus (){
    result.innerText = Number(result.innerText) - Number(numInput.value)
    color()
}

function color () {
    if(Number(result.innerText>=0)) {
        result.style.color = 'black'
    } else {
        result.style.color = 'red'
    }
}