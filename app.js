// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Función principal que agregará los nombres al array
function agregarAmigo() {
    let nombreAgregado = document.getElementById("amigo").value;
    if (nombreAgregado == "") {
        alert("Por favor, inserte un nombre.")
    } else {
        amigos.push(nombreAgregado);
        console.log(amigos);
        asignarTextoElemento("#amigo", "");
        return;
    }
}

//Función principal que agrega los nombres a la lista HTML
function actualizarLista() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";
    
}

//Función genérica para establecer el texto de un elemento en determinado valor
function asignarTextoElemento(elemento, texto) {
    document.querySelector(elemento).value = texto;
    //let elementoUsado = 
    //console.log(elementoUsado);
    //elementoUsado.value = texto;
    return;
}
