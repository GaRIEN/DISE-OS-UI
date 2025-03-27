const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="display:inline-block; animation-delay:${
          idx * 80
        }ms">${letter}</span>`
    )
    .join("");
});
