document.querySelector('#add').addEventListener('click',addNum)
document.querySelector('#sub').addEventListener('click',subNum)

let numInput = 0
let numOutput = document.getElementById('output')
let temp = 0

function addNum(){
    numInput = document.getElementById('input').value
    numInput *=1
    temp += numInput
    numOutput.innerText = temp

    if(temp < 0){
        document.getElementById('output').style.color = 'red' 
    }  else document.getElementById('output').style.color = 'black'
}

function subNum(){
    numInput = document.getElementById('input').value
    numInput *=1
    temp -= numInput
    numOutput.innerText = temp
    
    if(temp < 0){
        document.getElementById('output').style.color = 'red' 
    } else document.getElementById('output').style.color = 'black'
    
}
