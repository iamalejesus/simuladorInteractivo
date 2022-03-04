class Cotizador {
    constructor (destiny, ticket, clase, food){
        this.destiny = destiny
        this.ticket = ticket
        this.clase = clase
        this.food = food
    }
    cotizarPasaje (){
        let resultado = this.ticket * this.destiny
        return parseFloat(resultado)
    }
}