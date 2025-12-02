function calculateBMI() {
    // Obtener los valores de peso y altura desde los campos de entrada

    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const resultElement = document.getElementById('result');

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    // Validación: comprobar que ambos campos contienen valores numéricos y positivos
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultElement.style.color = 'red';
        resultElement.textContent = 'Por favor introduce peso y altura válidos.';
        return;
    }

    // Calcular el BMI
    const bmi = weight / (height * height);
    const bmiRounded = bmi.toFixed(2);

    // Mostrar el resultado en el elemento con id "result"
    resultElement.style.color = '';
    resultElement.textContent = `Tu BMI es: ${bmiRounded}`;
    
}
