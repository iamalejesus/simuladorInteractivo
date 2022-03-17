//Variables
const destiny = 57000;
let ticket = 0;
let clase = 0;
const food = 1500;

const destinyJS = document.getElementById("destinyJS");
const ticketsJS = document.getElementById("ticketsJS");
const classJS = document.getElementById("classJS");
const foodJS = document.getElementById("foodJS");
const resultJS = document.getElementById("resultJS");

//Arrays
const destinos = ["Buenos Aires, Ciudad de Buenos Aires, Argentina","Nueva York, Nueva York, Estados Unidos", "Londres, Inglaterra, Reino Unido", "Sídney, Nueva Gales del Sur, Australia"]; 

const tipoClase = ["Turista", "Bussines"];

const pasajes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const foodSelect = ["Si", "No"];

const expenses = []

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

//.DOM

const cargarDestinos = () => {
    for (dest of destinos) {
        let destList = `<option onclick=agregarAlCarrito(${dest}) class=destiny-item> ${dest} </option>`;
        destinyJS.innerHTML += destList;
    }
}
cargarDestinos ();

const cargarTickets = () => {
    for (tick of pasajes) {
        let tickList = `<option onclick=agregarAlCarrito(${tick})> ${tick} </option>`;
        ticketsJS.innerHTML += tickList;
    }
}
cargarTickets ();

const cargarClase = () => {
    for (cla of tipoClase) {
        let classList = "<option onclick=agregarAlCarrito(cla)>" + cla + "</option>";
        classJS.innerHTML += classList;
    }
}
cargarClase ();

const cargarFood = () => {
    for (foo of foodSelect) {
        let foodList = "<option onclick=agregarAlCarrito(foo)>" + foo + "</option>";
        foodJS.innerHTML += foodList;
    }
}
cargarFood ();

const agregarAlCarrito = (prod) => {
    if (prod.trim() > "") {
        const liProductos = document.createElement ("li")
                liProductos.className = "producto-item"
                liProductos.innerText = prod 
                resultJS.append (liProductos)
    }
}
//agregarAlCarrito ();