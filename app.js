// Un euro en distintas monedas
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};

function fromEuroToDollar(amountInEuro) {
     // Guardo en una variable el valor de la moneda que quiero (posición)
    const moneda = oneEuroIs["USD"];
    //Multiplico el valor de la moneda base por la que el usuario introduce
    const euroInDollar = amountInEuro * moneda;
    
    // Con toFixed escojo los decimales a redondear
    const dollarRounded = euroInDollar.toFixed(3);

    // Como ha sido convertido a string, hago parseFloat para que vuelva a ser 
    //decimal
    return parseFloat(dollarRounded);
}

// Exportar función
module.exports = { fromEuroToDollar };