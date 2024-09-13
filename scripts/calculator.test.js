const calculator = require('./calculator');

test('1+2=3', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('1+2=3', () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
});

test('1*2=2', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
});


test('1/0 throw error', () => {
    expect(() => {
        calculator.divide(1, 0);
    }).toThrow("Cannot divide by 0");
});

test('1/2=0.5', () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
});