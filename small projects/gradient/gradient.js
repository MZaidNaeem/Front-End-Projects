let body = document.body;
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let p = document.querySelector(".para");
let rand1;
let rand2;

function getRandomHexColor() {
  const randomNumber = Math.floor(Math.random() * 0xffffff);
  return randomNumber.toString(16).padStart(6, "0");
}
function rand(value) {
  let rand = getRandomHexColor();
  if (value == 1) {
    rand1 = rand;
  } else {
    rand2 = rand;
  }
}

function firstchanger() {
  rand(1);
  let str = `linear-gradient(to right, #${rand1},#${rand2})`;
  document.body.style.background = str;
}
function secondchanger() {
  rand(2);
  let str = `linear-gradient(to right, #${rand1},#${rand2})`;
  document.body.style.background = str;
}
function update() {
  p.innerText = `linear-gradient  (to right, #${rand1}  ,  #${rand2})`;
}
function buttonchanger() {
  //   one.style.backgroundColor = `#${rand1}`;
  one.innerText = `#${rand1}`;
  //   two.style.backgroundColor = `#${rand2}`;
  two.innerText = `#${rand2}`;
}

one.addEventListener("click", () => {
  console.log("one");
  buttonchanger();
  firstchanger();
  update();
});
two.addEventListener("click", () => {
  console.log("two");
  secondchanger();
  buttonchanger();
  update();
});

p.addEventListener("click", () => {
  navigator.clipboard.writeText(p.innerText);
  alert('"' + p.innerText + '"' + " copied to clip board");
});
firstchanger();
secondchanger();
buttonchanger();
update();
