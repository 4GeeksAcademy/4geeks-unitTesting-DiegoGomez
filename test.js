// Importar fuinción de app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Test fromEuroToDollar
test('USD: 53.5.', () => {
    const dinero = fromEuroToDollar(50)
    const expected = 50 * 1.07; 
    // El resultado esperado
    expect(fromEuroToDollar(50)).toBe(53.5);
});

// Test fromDollarToYen
test('JPY: 7825.', () => {
    const dinero = fromDollarToYen(50)
    const expected = 50 * 156.5; 
    // El resultado esperado
    expect(fromDollarToYen(50)).toBe(7825);
});

// Test fromYenToPound
test('GBP: 43.5.', () => {
    const dinero = fromYenToPound(50)
    const expected = 50 * 0.87; 
    // El resultado esperado
    expect(fromYenToPound(50)).toBe(43.5);
});