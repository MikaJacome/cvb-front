const nombre = document.querySelector('.nombre p');
nombre.innerHTML = nombre.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i*13}deg)">${char}</span>`
).join("")