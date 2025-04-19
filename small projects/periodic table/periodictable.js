let mainbody = document.querySelector(".mainbody");

function elmgenerator(name, value, number) {
  let element = document.createElement("div");
  element.classList.add("element");
  element.innerText = `Element ${number}`;
  element.setAttribute("name", name);
  element.setAttribute("value", value);
  mainbody.append(element);
}
for (let i = 1; i <= 50; i++) {
  elmgenerator(`elm ${i}`, i, i);
}

mainbody.addEventListener("click", (event) => {
  if (event.target.classList.contains("element")) {
    let name = event.target.getAttribute("name");
    let value = event.target.getAttribute("value");
    alert(`Element Name: ${name}\nPeriodic Value: ${value}`);
  }
});
