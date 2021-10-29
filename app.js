
let increaseNum = () => {
      document.getElementById("result").innerHTML +=
      document.getElementById("numbers").value
}

let decreaseNum = () => {
   
        document.getElementById("result").innerHTML -=
        document.getElementById("numbers").value
    
}


let plus = document.getElementById('plus').addEventListener('click', increaseNum)
let minus = document.getElementById('minus').addEventListener('click', decreaseNum)