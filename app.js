// Un euro en distintas monedas
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};

function fromEuroToDollar(cantidad) {
     // Guardo en una variable el valor de la moneda que quiero (posición)
    const moneda = oneEuroIs["USD"];

    //Multiplico el valor de la moneda base por la que el usuario introduce
    const euroInDollar = cantidad * moneda;

    // Como ha sido convertido a string, hago parseFloat para que vuelva a ser 
    //decimal
    return parseFloat(euroInDollar);
}

// Las demás funciones usan la misma lógica cambiando el valor de la moneda base
function fromDollarToYen (cantidad) {
   const moneda = oneEuroIs["JPY"];

   const dollarInYen = cantidad * moneda

   return parseFloat(dollarInYen);
}

function fromYenToPound(cantidad) {
   const moneda = oneEuroIs["GBP"];

   const poundInYen = cantidad * moneda;

   return parseFloat(poundInYen);
}

//Prueba fromEuroToDollar
console.log(fromEuroToDollar(50))

//Prueba fromDollarToYen
console.log(fromDollarToYen(50))

//Prueba fromYenToPound
console.log(fromYenToPound(50))

// Exportar funciones
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };