const analyzeArray = require('./analyzeArray');

test('test analyzeArray empty array throw error', () => {
    expect(() => {
        analyzeArray([]);
    }).toThrow('Input must be a non-empty array of numbers');
});

test('test analyzeArray string throw error', () => {
    expect(() => {
        analyzeArray('abc');
    }).toThrow('Input must be a non-empty array of numbers');
});

test('test analyzeArray [1,"2",3] throw error', () => {
    expect(() => {
        analyzeArray([1, "2", 3]);
    }).toThrow('Input must be a non-empty array of numbers');
});

const object = {
    average: 4,
    min: 1,
    max: 8,
    length: 6
};
test('test analyzeArray [1,8,3,4,2,6] to equal to object', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(object);
});