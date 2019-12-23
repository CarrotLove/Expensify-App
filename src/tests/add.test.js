const add = (a, b) => a + b ;
const generateGreetng = (name = 'Anonymous') => `Hello ${name}`;

test('should add two numbers', () => {
    const result = add(3,4);
    expect(result).toBe(7);
});

test('name', () => {
    const result = generateGreetng('Weiting');
    expect(result).toBe('Hello Weiting');
})