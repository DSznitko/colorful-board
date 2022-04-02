const box = document.querySelector(".box");
const speedBtns = document.querySelectorAll("[data-setting='speed']");
const colorBtns = document.querySelectorAll("[data-setting='color']");
const sliderInput = document.querySelector("#slider");
const saturationInfo = document.querySelector(".slider-info");

const squares = 546;
let sliderValue = 70;
let range = 360;




const createSquares = (squareSpeed) => {
  box.innerHTML = '';
  for(let i = 0; i < squares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.transitionDuration = squareSpeed;
    console.log(squareSpeed)
    square.addEventListener("mouseover", () => setColor(square));
square.addEventListener("mouseout", () => removeSquareColor(square));

    box.appendChild(square);
    
   
    
  }



}

const setColor = (square) => {
  let h;
  if(range === 360) {
    h = Math.floor(Math.random() * 360)
  } else {
    h = Math.floor(Math.random() * 60) + range
  }

  let s = sliderInput.value + "%";
  let l = '50%';
  square.style.backgroundColor = `hsl(${h},${s},${l})`
}

function setSpeed ()  {
const squareSpeed = this.dataset.speed + "s";
createSquares(squareSpeed)
}


const removeSquareColor = square => {
  square.style.backgroundColor = "transparent"
}

const setRange = (e) => {
const currentColor = parseFloat(e.target.dataset.colorRange);
range = currentColor;

}

const setSliderValue = () => {
  saturationInfo.textContent = sliderInput.value;
}



sliderInput.addEventListener("mousemove", setSliderValue)
colorBtns.forEach(btn => btn.addEventListener("click", setRange))
speedBtns.forEach(btn => btn.addEventListener("click", setSpeed))
createSquares()
