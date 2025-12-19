const riddles = [
    {
        question: "Blanca por dentro, verde por fuera. Si quieres que te lo diga, espera.",
        answer: "La pera"
    },
    {
        question: "Oro parece, plata no es. El que no lo adivine, bien tonto es.",
        answer: "El plátano"
    },
    {
        question: "Agua pasa por mi casa, cate de mi corazón. El que no lo adivinare, será un burro cabezón.",
        answer: "El aguacate"
    },
    {
        question: "Tengo agujas pero no coso, tengo números pero no cuento. ¿Qué soy?",
        answer: "El reloj"
    },
    {
        question: "Blanco fue mi nacimiento, verde mi niñez, rojo mi madurez y negro mi vejez.",
        answer: "La mora"
    },
    {
        question: "Vuelo sin alas, lloro sin ojos. Donde quiera que voy, la oscuridad me sigue.",
        answer: "La nube"
    },
    {
        question: "Tengo corona pero no soy rey, tengo escamas pero no soy pez. ¿Qué soy?",
        answer: "La piña"
    },
    {
        question: "Redondo, redondo como un queso, y tiene el rabo tieso.",
        answer: "La sartén"
    },
    {
        question: "Tiene dientes y no come, tiene cabeza y no es hombre.",
        answer: "El ajo"
    },
    {
        question: "En el campo me crié, dando voces como loca. Me ataron de pies y manos para quitarme la ropa.",
        answer: "La campana"
    },
    {
        question: "Soy redonda como el mundo, al morir me despedazan, me reducen a pellejo y todo el jugo me sacan.",
        answer: "La naranja"
    },
    {
        question: "Tito, tito, capotito, sube al cielo y pega un grito.",
        answer: "El cohete"
    },
    {
        question: "Una señorita muy aseñorada, que siempre va en coche y siempre va mojada.",
        answer: "La lengua"
    },
    {
        question: "Tengo hojas sin ser árbol, te hablo sin tener voz, si me abres no me quejo, adivina quién soy yo.",
        answer: "El libro"
    },
    {
        question: "Todos me buscan para descansar. Si ya te lo he dicho, no lo pienses más.",
        answer: "La silla"
    },
    {
        question: "Cuanto más caliente, más fresco y crujiente.",
        answer: "El pan"
    },
    {
        question: "Verde me crié, amarillo me cortaron, rojo me molieron y blanco me amasaron.",
        answer: "El trigo"
    },
    {
        question: "Dos hermanas muy unidas que caminan al compás, con el pico por delante y los ojos por detrás.",
        answer: "Las tijeras"
    },
    {
        question: "Soy bonito por delante, algo feo por detrás; me transformo a cada instante, pues imito a los demás.",
        answer: "El espejo"
    },
    {
        question: "Cien damas en un camino y no hacen polvo ni remolino.",
        answer: "Las hormigas"
    },
    {
        question: "Tengo patas y no ando, soy plana y no canto, se me apoyan para escribir y no me puedo ir.",
        answer: "La mesa"
    },
    {
        question: "Chiquito como un ratón, cuida la casa como un león.",
        answer: "El candado"
    },
    {
        question: "Sube llena y baja vacía, si no se da prisa, la sopa se enfría.",
        answer: "La cuchara"
    },
    {
        question: "Con tan solo cuatro cuerdas, que un hombre maneja, esta caja melodiosa le alegra hasta a las viejas.",
        answer: "La guitarra"
    },
    {
        question: "Tengo cadenas sin ser preso, si me empujas voy y vengo, en los jardines y parques muchos niños entretengo.",
        answer: "El columpio"
    },
    {
        question: "Zumba que te zumbarás, van y vienen sin descanso, de flor en flor trajinando y nuestra vida endulzando.",
        answer: "Las abejas"
    },
    {
        question: "Soy un palito muy derechito y encima de la frente llevo un mosquito.",
        answer: "La letra i"
    },
    {
        question: "Treinta y dos sillitas blancas en un viejo comedor, y una vieja parlanchina que las pisa sin temor.",
        answer: "Los dientes y la lengua"
    },
    {
        question: "Llevo mi casa al hombro, camino sin tener patas, y voy marcando mi huella con un hilito de plata.",
        answer: "El caracol"
    },
    {
        question: "Adivina quién soy: cuanto más lavo, más sucia voy.",
        answer: "El agua"
    },
    {
        question: "En alto vive, en alto mora, en alto teje la tejedora.",
        answer: "La araña"
    },
    {
        question: "Tengo un tabique en el medio y dos ventanas a los lados por las que entra el aire puro y sale el ya respirado.",
        answer: "La nariz"
    },
    {
        question: "Largo, largo como una soga y tiene dientes como una loca.",
        answer: "La serpiente"
    },
    {
        question: "Fui al mercado y compré bella, llegué a mi casa y lloré con ella.",
        answer: "La cebolla"
    },
    {
        question: "De celda en celda voy, pero presa no estoy.",
        answer: "La abeja"
    },
    {
        question: "Soy ave y soy llana, pero no tengo pico ni alas.",
        answer: "La avellana"
    },
    {
        question: "Cinco hermanos muy unidos que no se pueden mirar, cuando riñen aunque quieras no los puedes separar.",
        answer: "Los dedos"
    },
    {
        question: "Mi madre es tartamuda, mi padre es cantador, tengo blanco mi vestido, amarillo el corazón.",
        answer: "El huevo"
    },
    {
        question: "Salimos cuando anochece, nos vamos al cantar el gallo, y hay quien dice que nos ve cuando le pisan un callo.",
        answer: "Las estrellas"
    },
    {
        question: "Tengo ríos pero no agua, tengo ciudades pero no edificios, tengo bosques pero no árboles. ¿Qué soy?",
        answer: "El mapa"
    }
];

let currentRiddle;
let correctAnswer = 0;

function normalizeText(text) {
    return text.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '');
}

function loadNewRiddle() {
    currentRiddle = riddles[Math.floor(Math.random() * riddles.length)];
    document.getElementById("riddle").innerText = currentRiddle.question;
}


document.addEventListener("DOMContentLoaded", function() {
    loadNewRiddle();
});


function checkAnswer() {
    const userAnswer = normalizeText(document.getElementById("answer-input").value);
    const correctAns = normalizeText(currentRiddle.answer);
    const modal = document.getElementById("feedback-modal");
    const content = document.getElementById("feedback-content");
    const icon = document.getElementById("feedback-icon");
    const message = document.getElementById("feedback-message");
    
    if (userAnswer === correctAns) {
        correctAnswer++;
        document.getElementById("correctCount").innerText = correctAnswer;
        
        icon.textContent = "✓";
        message.textContent = "¡Correcto!";
        message.style.color = "#38bdf8";
        content.classList.remove("error");
        
        document.getElementById("answer-input").value = "";
        
        modal.classList.add("show");
        setTimeout(() => {
            modal.classList.remove("show");
            loadNewRiddle();
        }, 1500);
    } else {
        icon.textContent = "✗";
        message.textContent = "Incorrecto. Intenta de nuevo.";
        message.style.color = "#ef4444";
        content.classList.add("error");
        
        document.getElementById("answer-input").value = "";
        
        modal.classList.add("show");
        setTimeout(() => {
            modal.classList.remove("show");
        }, 1500);
    }
}