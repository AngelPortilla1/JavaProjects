const userData ={

    name : "Angel Fuhrer",
    description: "Desarrollador Full Stack con experiencia en Java, JavaScript y Python. Apasionado por crear soluciones innovadoras y eficientes.",
    email:"angelportihernan019@gmail.com",
    telefono : "+57 3205341431"

}


function loadUserProfile(userData){
    document.getElementById("UserName").textContent = userData.name;
    document.getElementById("userDescription").textContent = userData.description;
    document.getElementById("userEmail").textContent = userData.email;
    document.getElementById("userPhone").textContent = userData.telefono;
}


document.addEventListener("DOMContentLoaded", function(){
    loadUserProfile(userData);
});