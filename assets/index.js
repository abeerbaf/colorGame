let diffEls = document.querySelectorAll(".diff__btn");
let diffEl = document.querySelector(".diff__btn.active").innerHTML;
let n = diffEl;
let colorsEl = document.querySelector(".colors");
let colorsBlocks;
let rgbEl = document.querySelector(".rgb");
let statusEl = document.querySelector(".status");
let resetBtn = document.querySelector(".reset");
let header = document.querySelector(".header");
let colors = [];
let pickedColor;

createBlocks(n);
resetGame();

function checkColors() {
  // your code here
  for(let i =0; i < colorsBlocks.length; i++){
    colorsBlocks[i].addEventListener('click', ()=>{
      console.log(colorsBlocks[i].style.backgroundColor);
      console.log(colorsBlocks[i].style.backgroundColor)
      if(colorsBlocks[i].style.backgroundColor === colors[pickedColor]){
        statusEl.textContent = "CORRECT!"
        resetBtn.textContent = "New game";
        changeColors();
        header.style.backgroundColor = colors[pickedColor]
        statusEl.style.backgroundColor = colors[pickColors]
      }else{
        colorsBlocks[i].style.backgroundColor = 'black'
      }
    })
  }
  
}

function resetGame() {

  statusEl.style.backgroundColor = 'white'
  header.style.backgroundColor = 'white'
  createBlocks(n);
  document.body.style.color = "black";
  colors = [];
  pickColors();
  pickedColor = random(n);
  rgbEl.innerHTML = colors[pickedColor];
  setColors();
  statusEl.innerHTML =
    "Try to guess the right color based on the RGB value by clicking on the blocks.";
  setNumberOfTiles()
}

function setColors() {
  for (var i = 0; i < colorsBlocks.length; i++) {
    colorsBlocks[i].style.backgroundColor = colors[i];
  }
}

function pickColors() {
  for (var i = 0; i < n; i++) {
    colors.push(randomColor());
  }
}

function randomColor() {
  return "rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")";
}

function random(r) {
  return Math.floor(Math.random() * r);
}

function setNumberOfTiles(e) {
  // your code here
  for(let i = 0; i <= 1; i++){
    diffEls[i].addEventListener('click', ()=>{
    diffEls[1].classList.remove('active');
    diffEls[i].classList.remove('active');
    diffEls[i].classList.add('active');
    diffEls[0].innerHTML === '6' ? n = 6 : n = 9 ;
    resetGame()
    })
  }
}

function createBlocks(num) {
  colorsEl.innerHTML = "";

  // here is an example of a loop that is used to create the blocks of color depending on you choice ie 6 or 9, however you need to add event listeners
  for (var i = 0; i < num; i++) {
    var block = document.createElement("div");
    block.classList.add("colors__block");
    colorsEl.appendChild(block);
  }
  colorsBlocks = document.querySelectorAll(".colors__block");
  for (var i = 0; i < colorsBlocks.length; i++) {
    colorsBlocks[i].addEventListener("click", checkColors);
  }
}


function changeColors(){
  for(let i = 0; i <colorsBlocks.length; i++){
    colorsBlocks[i].style.backgroundColor = colors[pickedColor]
  }
}