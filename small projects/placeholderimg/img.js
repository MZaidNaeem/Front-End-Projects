const select = document.querySelector("select");
const inputAll = document.querySelector("input");
const myImg = document.querySelector("img");
let textarea = document.querySelector("textarea");
function createImagePath() {
  let urlPath = `http://127.0.0.1:5500/projects/in%20process/placeholderimg/img.html${select.value}`;
  myImg.src = urlPath;
  textarea.value = urlPath;
}
inputAll.addEventListener("change", createImagePath);
select.addEventListener("change", createImagePath);
