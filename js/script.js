let inputNum = document.getElementById('input-number')
let outputNum = document.getElementById('output-number')

const onClick = e => {
  let inNum = parseInt(inputNum.value)
  let outNum = parseInt(outputNum.innerText)
  let result = 0
  // console.log("🚀 ~ file: script.js ~ line 9 ~ onClick ~ outNum", outNum)

  if (e.target.nodeName === 'BUTTON') {
    if (e.target.id === 'plus') {
      result = inNum + outNum
    } else {
      result = outNum - inNum
    }
    if (result < 0) {
      outputNum.style.color = 'red'
    } else {
      outputNum.style.color = 'black'
    }
    outputNum.innerText = result
  }
}
window.addEventListener('click', onClick)
