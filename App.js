//get elements: hex color button, rgb color button, text that display's the color
const hexBtn = document.getElementById("btnhex");
const colorText = document.querySelector(".colortext");

//generate random number with range from 0 to the maxNum
const getRandomNumber = maxNum => Math.floor(Math.random() * maxNum);

//generate hex color codes
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const getHexColor = () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    let randomIndex = getRandomNumber(hex.length);
    hexColor += hex[randomIndex];
  }
  return hexColor;
};

//set background-color and text by passing a function that returns color code;
const changeColor = func => {
  const newColor = func();
  document.body.style.backgroundColor = newColor;
  colorText.textContent = newColor;
};

//hexBtn makes the color change during click event
hexBtn.addEventListener("click", () => changeColor(getHexColor));
