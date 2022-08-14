// const frutas = ['Platano 🍌', 'Manzana 🍎', 'Pera 🍐', 'Fresa 🍓']

// Importar modulos de node cuando es solo una propiedad
// const frutero = require('./frutero')


// Importar cuando son dos o más propiedades -- Destructing Object
const {frutas, dinero} = require('./frutero')

// Importando el paquete cowsay instalado por npm
const cowsay = require('cowsay')

// Usando cowsay

console.log(cowsay.say({
    text : "Soy un modulo llamado cowsay",
    e : "oO",
    T : "U "
}));

//Recorriendo el array e iterarlo 1x1
frutas.forEach(item => {
    // Diferencias entre count y log
    console.log(item)
    console.count(item)
})

// Imprimiendo la seg constante que vienes desde frutas.js
console.log(dinero)