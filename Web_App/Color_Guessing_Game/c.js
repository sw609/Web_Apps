var squares = document.querySelectorAll(".square");
var rgbDisplay = document.querySelector("#rgbDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var pickedColor = changeColor();
var reset = document.querySelector("#reset");
var modes = document.querySelectorAll(".mode");


regenerate();

for (i=0; i<modes.length; ++i) {
  modes[i].addEventListener("click", function(){
    modes[0].classList.remove("selected");
    modes[1].classList.remove("selected");
    this.classList.add("selected");
    if(this.textContent==="Easy"){
      squares[3].style.display = "none";
      squares[4].style.display = "none";
      squares[5].style.display = "none";
      squares = [squares[0], squares[1], squares[2]];
      regenerate();
    }else{
      squares = document.querySelectorAll(".square");
      squares[3].style.display = "block";
      squares[4].style.display = "block";
      squares[5].style.display = "block";
      regenerate();
    }
  })
}

function regenerate(){

  rgbDisplay.textContent = pickedColor;
  for (i=0; i<squares.length; ++i){
    squares[i].style.background = changeColor();
    squares[i].addEventListener("click", function(){
      if (this.style.background === pickedColor){
        message.textContent = "Correct!";
        for (i=0; i<squares.length; ++i){
          squares[i].style.background = pickedColor;
        }
        h1.style.background = pickedColor;
        reset.textContent = "Play Again?";
      }else{
        this.style.background = "#232323";
        message.textContent = "Try Again";
      }
    });
  }
  var squareIndex = Math.floor(Math.random()*squares.length);
  squares[squareIndex].style.background = pickedColor;
  message.textContent = null;
  h1.style.background = "steelblue";
}


reset.addEventListener("click", function(){
  pickedColor = changeColor();
  reset.textContent = "NEW COLORS";
  regenerate();
})


function changeColor(){
  var red = String(Math.floor(Math.random() * 256));
  var green = String(Math.floor(Math.random() * 256));
  var blue = String(Math.floor(Math.random() * 256));
  return "rgb("+red+", "+green+", "+blue+")";
}
