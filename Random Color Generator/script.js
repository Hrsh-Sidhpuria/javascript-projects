document
  .getElementById("btn")
  .addEventListener("click", function colorWithCode(event) {
    event.preventDefault();
    let hexcode = "0123456789ABCDEF";
    let colorcode = "#";
    for (let i = 0; i < 6; i++) {
      colorcode += hexcode[Math.floor(Math.random() * 16)];
    }
    console.log(colorcode);
    document.getElementById("input").value = colorcode;
    document.getElementById("Outer-container").style.backgroundColor =
      colorcode;
  });

function randomColor() {
  let hex = "0123456789ABCDEF";
  let color = "#";
  setTimeout(() => {
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;
    document.body.offsetHeight;
    document.body.style.transition = "background-color 1s ease";
  }, 1000);
}

setInterval(randomColor, 2000);
