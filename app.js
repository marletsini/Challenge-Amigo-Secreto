
let listaAmigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value; 

   
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return; 
    }

    
    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return; 
    }

    listaAmigos.push(nombre);

    document.getElementById("amigo").value = "";
  
    mostrarLista();
}
function mostrarLista() {
    let listaHTML = document.getElementById("listaAmigos");


    listaHTML.innerHTML = "";  

   
    for (let amigo of listaAmigos) {
        listaHTML.innerHTML += `<li>${amigo}</li>`; 
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Coloca un nombre primero.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];

    let resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
