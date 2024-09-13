const capitalize = require('./capitalize');

test('test "" to equal ""', () => {
    expect(capitalize("")).toBe("");
});

test('test "hello World" to equal "Hello World"', () => {
    expect(capitalize("hello World")).toBe("Hello World");
});

test('test "123helloWorld" to equal "123HelloWorld"', () => {
    expect(capitalize("123helloWorld")).toBe("123HelloWorld");
});

test('test "@#&*$" to equal "@#&*$"', () => {
    expect(capitalize("@#&*$")).toBe("@#&*$");
});