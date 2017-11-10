window .addEventListener('keydown', function(e){
  var ascii = e.keyCode;
  console.log(ascii)
  var circle = document.querySelector("div");

  if (ascii == 38) {
    topCircle.classList.add("red");
    bottomCircle.classList.remove("red");
    redCircle.classList.add("red");
  }
  if (ascii == 40) {
    topCircle.classList.remove("red");
    redCircle.classList.add("red");
    redCircle.classList.remove("red");
    bottomCircle.classList.add("red");
  }
  if (ascii == 37) {
    redCircle.classList.remove("red");
    leftCircle.classList.add("red");
    leftCircle.classList.remove("red");
    redCircle.classList.add("red");
  }
  if (ascii == 39) {
    redCircle.classList.remove("red");
    rightCircle.classList.add("red");
    rightCircle.classList.remove("red");
    redCircle.classList.add("red");
  }

})
