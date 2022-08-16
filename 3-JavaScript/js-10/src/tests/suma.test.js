const suma = require('./../js/suma');

test('sumar 1 + 2 debe ser 3', () => {
    expect(suma(1,2)).toBe(3);
})

test('sumar 1 + 4 no debe ser 0', () => {
    expect(suma(1,4)).not.toBe(0);
})