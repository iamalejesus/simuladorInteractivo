//Variables
const destiny = 57000;
let ticket = 0;
let clase = 0;
const food = 1500;

//Objeto Cotizador
class Cotizador {
    constructor (destiny, ticket, clase, food){
        this.destino = destiny;
        this.tickets = ticket;
        this.clase = clase;
        this.food = food;
    }
    cotizarPasaje (){
        let resultado = this.tickets * this.destino; 
        return parseFloat(resultado);
    }
}

let nombre = prompt("Ingrese su nombre: ");
console.log ("Su nombre de usuario es: " + nombre);

function cotizarPasaje(){ 
    ticket = parseInt(prompt("Ingrese cuantos tickets desea comprar: "));
    const cotizadorPasaje = new Cotizador (destiny, ticket,clase, food);
    res = cotizadorPasaje.cotizarPasaje();
}

cotizarPasaje()
alert ("El valor total de los pasajes es de:" + " AR$" + res);
console.log ("El valor total de los pasajes es de:" + " AR$" + res);

//Arrays
const destinos = [" ", "Buenos Aires, Ciudad de Buenos Aires, Argentina","Nueva York, Nueva York, Estados Unidos", "Londres, Inglaterra, Reino Unido", "Sídney, Nueva Gales del Sur, Australia"]; 

const tipoClase = [" ", "Turista", "Bussines"];

//.table
console.table (destinos);


//.length
function mostrarDestinos () {
    for (let i = 0; i < destinos.length; i++){
        console.log (destinos[i])
    }
}
mostrarDestinos ();

//.push
function agregarDestino (nuevoDestino) {
    if (nuevoDestino.trim() > "") {
        destinos.push (nuevoDestino)
    }
}
agregarDestino ("Miami, Florida, Estados Unidos");
console.table (destinos);

tipoClase.push ("Primera Clase");
console.table (tipoClase);

//.unshift
destinos.unshift ("Berlín, Berlín, Alemania");
console.table (destinos);

