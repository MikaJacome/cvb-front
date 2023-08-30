const nombre = document.querySelector('.nombre h3');
    nombre.innerHTML = nombre.innerName.split('').map(
        (char, i) =>
        `<span style= "transform:rotate(${i * 8.3}deg)">${char}</span>`
        ).join('');