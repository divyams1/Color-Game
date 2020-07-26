var colors = generateRandomColors(6);
var h1 = document.querySelector("h1");
var resetButoon = document.querySelector("#reset");
var numsquares = 6;

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    for(var i =0; i< modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent ==="Easy"){
                numsquares =3;
            } else {
                numsquares = 6;
            }
            reset();
        })
    }
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function(){
           var clickedColor = this.style.backgroundColor;
           if (clickedColor === pickedColor){
               messageDisplay.textContent ="Correct";
               changeColors(clickedColor);
               h1.style.background = clickedColor;
               resetButoon.textContent = "Play Again"
           }
           else {
               this.style.backgroundColor = "#232323";
               messageDisplay.textContent ="Play again";
           } 
        })
    
    }
    
}

function reset() {
    colors = generateRandomColors(numsquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickColor();
    resetButoon.textContent = "New Colors";
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block"
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
        
    }
    h1.style.background = "steelblue";
    
}




var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

function changeColors(color) {
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
}
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for(var i=0; i<num; i++) {
        arr.push(randomColor())
    }
    return arr;
    
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
 
    var g=  Math.floor(Math.random() * 256);
 
    var b=  Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
 }

 resetButoon.addEventListener("click", function(){
     colors = generateRandomColors(numsquares);
     pickedColor = pickColor();
     colorDisplay.textContent = pickColor();
     this.textContent = "New Colors";
     for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
     }
     h1.style.background = "steelblue";
     messageDisplay.textContent = "";

 })