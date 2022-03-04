const destiny = 57000;
let ticket = 0;
let clase = 0;
const food = 1500;

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
console.log ("Usted a ingresado: " + nombre);

function cotizarPasaje(){ 
    ticket = parseInt(prompt("Ingrese cuantos tickets desea comprar: "));
    
    const cotizadorPasaje = new Cotizador (destiny, ticket,clase, food);
    res = cotizadorPasaje.cotizarPasaje();
}

cotizarPasaje()
console.log ("El valor total de los pasajes es de:" + " ARS" ,res);