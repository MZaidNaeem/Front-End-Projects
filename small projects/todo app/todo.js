let ul = document.querySelector("ul");
let input = document.querySelector("input");
let create = document.querySelector(".create");
let local = new Set();

let deleteitems = (event) => {
  let del = event.target;
  del.parentElement.remove();
  let value = del.parentElement.firstChild.innerText;
  local.delete(value);
  localsaver();
};

function localsaver() {
  localStorage.setItem("todo", JSON.stringify([...local]));
  console.log(local);
}

function creator() {
  let value = input.value.trim();
  if (value) {
    let li = document.createElement("li");
    let del = document.createElement("button");
    del.classList.add("btn", "btn-outline-success");
    del.innerText = "delete";
    li.innerHTML = `<span>${value}</span>`;
    ul.append(li);
    li.append(del);
    local.add(input.value);
    localsaver();
    del.addEventListener("click", deleteitems);
    input.value = "";
  } else {
    input.value = "";
  }
}

create.addEventListener("click", () => {
  creator();
});

window.addEventListener("load", () => {
  let value = JSON.parse(localStorage.getItem("todo"));
  value.forEach((cuvalue) => {
    local.add(cuvalue);
  });
  if (local) {
    local.forEach((cuvalue) => {
      let li = document.createElement("li");
      let del = document.createElement("button");
      del.classList.add("btn", "btn-outline-success");
      del.innerText = "delete";
      li.innerHTML = `<span>${cuvalue}</span>`;
      ul.append(li);
      li.append(del);
      del.addEventListener("click", deleteitems);
    });
  }
});
