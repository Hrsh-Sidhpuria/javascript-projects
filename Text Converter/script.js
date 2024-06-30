function originalText() {
  let text = document.querySelector(".text-input").value;
  console.log(text);
  document.querySelector(".text-input-2").innerText = text;
  document.querySelector(".text-input-2").style.textDecoration = "none";
}

function uppercaseText() {
  let toUprText = document.querySelector(".text-input").value;
  let uppercase = toUprText.toUpperCase();
  document.querySelector(".text-input-2").innerText = uppercase;
  document.querySelector(".text-input-2").style.textDecoration = "none";
}

function lowercase() {
  let toUprText = document.querySelector(".text-input").value;
  let lowerCase = toUprText.toLowerCase();
  document.querySelector(".text-input-2").innerText = lowerCase;
  document.querySelector(".text-input-2").style.textDecoration = "none";
}
function titletext() {
  let text = document.querySelector(".text-input").value;
  document.querySelector(".text-input-2").innerHTML =
    text.charAt(0).toUpperCase() + text.innerHTML.slice(1).toLowerCase();
  document.querySelector(".text-input-2").style.textDecoration = "none";
}
function boldtext() {
  let text = document.querySelector(".text-input").value;
  document.querySelector(".text-input-2").innerHTML = text.bold();
  document.querySelector(".text-input-2").style.textDecoration = "none";
}
function italictext() {
  let text = document.querySelector(".text-input").value;
  document.querySelector(".text-input-2").innerHTML = text.italics();
  document.querySelector(".text-input-2").style.textDecoration = "none";
}

function Underline() {
  let text = document.querySelector(".text-input").value;
  document.querySelector(".text-input-2").innerText = text;
  document.querySelector(".text-input-2").style.textDecoration = "underline";
}

function Linethrough() {
  let text = document.querySelector(".text-input").value;
  document.querySelector(".text-input-2").innerText = text;
  document.querySelector(".text-input-2").style.textDecoration = "line-through";
}
