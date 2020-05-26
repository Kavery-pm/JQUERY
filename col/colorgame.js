var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;
var btn =document.querySelector("#reset");
var esybtn = document.querySelector("#esybtn");
var hrdbtn = document.querySelector("#hrdbtn");

esybtn.addEventListener("click",function()
{

esybtn.classList.add("selected");
hrdbtn.classList.remove("selected");
numSquares = 3;
colors = generateRandomColors(numSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
for(i=0;i<squares.length;i++)
{
	if(colors[i])
	{
		squares[i].style.backgroundColor = colors[i];
	}
	else
	{
		squares[i].style.display = "none";
	}
}

});

hrdbtn.addEventListener("click",function() 
{

hrdbtn.classList.add("selected");
esybtn.classList.remove("selected");
colors = generateRandomColors(numSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
for(i=0;i<squares.length;i++)
{
squares[i].style.backgroundColor = colors[i];
	squares[i].style.display = "block";
	}
});

btn.addEventListener("click",function() {
//generate ran col
colors = generateRandomColors(6);
//generate picked color
pickedColor = pickColor();
btn.textContent = "New Colors";
colorDisplay.textContent = pickedColor;
messageDisplay.textContent = "";

for(var i=0; i<squares.length; i++)
{
	squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";

});

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];


	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			btn.textContent = "play again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;

		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
