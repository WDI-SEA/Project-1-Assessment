document.addEventListener('DOMContentLoaded',()=>{
  
  plusBtn.addEventListener('click',() => {
    output.innerText = Number(output.innerText) + Number(input.value)
    if(Number(output.innerText) < 0){
      output.style.color = 'red'
    } else {
      output.style.color = 'black'
    }
  })
  minusBtn.addEventListener('click',() => {
    output.innerText = Number(output.innerText) - Number(input.value)
    if(Number(output.innerText) < 0){
      output.style.color = 'red'
    } else {
      output.style.color = 'black'
    }
  })

})