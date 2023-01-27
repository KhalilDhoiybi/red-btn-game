function changeGreen() {
  document.getElementById("title").style.color = "green";
}
function changeYellow() {
  document.getElementById("title").style.color = "yellow";
}
function changeBlue() {
  document.getElementById("title").style.color = "blue";
}
function changePurple() {
  document.getElementById("title").style.color = "purple";
}
function changeRed() {
  document.getElementById("title").style.color = "red";
}

var redButtons = document.getElementsByClassName("red-btn");

for (let i = 0; i < 4; i++) {
  redButtons[i].addEventListener("mouseover", () => {
    redButtons[i].className = "btn red-btn red-btn-move";
  });
}
