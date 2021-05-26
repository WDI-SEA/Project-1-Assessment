// dom manipulation
document.addEventListener("DOMContentLoaded", () => {
  let upDog = document.getElementById("plus");
  let downDog = document.getElementById("minus");
  let toAdd = document.getElementById("addeller");
  let numView = document.getElementById("numdisplay");

  // + onclick, numdisplay + input value
  upDog.addEventListener("click", () => {
    numView.innerText = parseInt(numView.innerText) + parseInt(toAdd.value);
  });

  // - onclick, numdisplay - input value
  downDog.addEventListener("click", () => {
    numView.innerText = parseInt(numView.innerText) - parseInt(toAdd.value);
  });
  if(parseInt(numView.innerText) < 0) {
      numView.innerText.style(
          color = "red"
      )
  }
});

// [ number display ] - set
// [ + ] <input>  [ - ] - set
// start app - it just works
// numdisplay = 1 - done
// <input> = 1 - done
// +- onhover, color invert - css
