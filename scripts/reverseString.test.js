const reverseString = require('./reverseString');

test('"" to equal ""', () => {
    expect(reverseString("")).toBe("");
});

test('"123" to equal "321"', () => {
    expect(reverseString("123")).toBe("321");
});

test('"1 v @ " to equal " @ v 1"', () => {
    expect(reverseString("1 v @ ")).toBe(" @ v 1");
});

test('"Hello World" to equal "dlroW olleH"', () => {
    expect(reverseString("Hello World")).toBe("dlroW olleH");
});