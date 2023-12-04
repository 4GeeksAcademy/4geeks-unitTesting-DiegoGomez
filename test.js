// Importar fuinción de app.js
const { fromEuroToDollar } = require('./app.js');

// Hacer test de la función
test('One euro should be 1.07 dollars', () => {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
    // El resultado esperado
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});