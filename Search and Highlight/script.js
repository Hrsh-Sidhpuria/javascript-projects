const text = document.querySelector("p");
const btn = document.querySelector(".searchIt");

btn.addEventListener("click", () => {
  let input = document.querySelector(".search").value;
  let regexp = new RegExp(input, "gi");
  text.innerHTML = text.textContent.replace(regexp, `<mark>$&</mark>`);
});
