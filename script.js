let id = 0;
function enter() {
  id++;
  let element = document.getElementById("el").value;
  let width = document.getElementById("wi").value + "px";
  let height = document.getElementById("he").value + "px";
  let checkbox = document.getElementById("ch").checked;
  let checkbox2 = document.getElementById("ch2").checked;
  let color = document.getElementById("co").value;
  let display = document.getElementById("di").value;
  let text = document.getElementById("te").value;

  let a = document.createElement(element);
  if (checkbox == true) {
    a.style.backgroundColor = color;
  }
  if (checkbox2 == true) {
    a.display = display;
  }
  a.style.width = width;
  a.style.height = height;
  a.innerText = text;
  a.id = id;

  document.body.appendChild(a);
}
function deletee() {
  let a = document.getElementById(id);
  a.remove();
  id--;
}
