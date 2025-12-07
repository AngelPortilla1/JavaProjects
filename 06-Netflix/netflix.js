const loginForm = document.getElementById('login-form');
const sucessMessage = document.getElementById('success-message');



loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const Username = document.getElementById('user').value;
    const Password = document.getElementById('password').value;

    if (Username === 'admin' && Password === 'password') {
        sucessMessage.textContent = 'Inicio de sesión exitoso. ¡Bienvenido a Netflix!';
    } else {
        sucessMessage.textContent = 'Nombre de usuario o contraseña incorrectos. Inténtalo de nuevo.';
    }
});