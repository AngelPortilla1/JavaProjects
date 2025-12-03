const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');

const colorDisplay = document.getElementById('colorDisplay');
const colorValue = document.getElementById('rgbValue');



function updateColor() {
    const r = red.value;
    const g = green.value;
    const b = blue.value;


    const rgbString = `rgb(${r}, ${g}, ${b})`;
    colorDisplay.style.backgroundColor = rgbString;
    colorValue.textContent = rgbString;
}

red.addEventListener('input', updateColor);
green.addEventListener('input', updateColor);
blue.addEventListener('input', updateColor);


updateColor();


const copyButton = document.getElementById('copyButton');


copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(colorValue.textContent)
        .then(() => {
            alert('Color copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar al portapapeles: ', err);
            alert('No se pudo copiar al portapapeles');
        });
});
