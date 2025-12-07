


const runbutton = document.getElementById('ejecutarBtn');
const codeEditor = document.getElementById('textEditor');
const output = document.getElementById('output');

runbutton.addEventListener('click', runCode);

//funcion para correr el codigo
function runCode(){
    const code = codeEditor.value;

    try{
        const result = eval(code);
        output.textContent = result;

    } catch (error){
        output.textContent = 'Error: ' + error.message;
    }
}