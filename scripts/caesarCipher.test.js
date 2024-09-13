const caesarCipher = require('./caesarCipher');

test('test shift "xyz" by 1.5 throw error', () => {
    expect(() => {
        caesarCipher('xyz', 1.5);
    }).toThrow('Key is not integer');
});

test('test shift "xyz" by abc throw error', () => {
    expect(() => {
        caesarCipher('xyz', 'abc');
    }).toThrow('Key is not integer');
});

test('test shift "xyz" by 3 to equal "abc"', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('test shift "HeLLo" by 3 to equal "KhOOr"', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('test shift "Hello, World!" by 3 to equal "Khoor, Zruog"', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('test shift "Hello, World!" by 29 to equal "Khoor, Zruog"', () => {
    expect(caesarCipher('Hello, World!', 29)).toBe('Khoor, Zruog!');
});

test('test shift "Hello, World!" by -23 to equal "Khoor, Zruog"', () => {
    expect(caesarCipher('Hello, World!', -23)).toBe('Khoor, Zruog!');
});