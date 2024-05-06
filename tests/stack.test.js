const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

test('after using pop, return the top element of the stack', () => {
    stack.push(30);
    expect(stack.pop()).toBe(30);
    expect(stack.peek()).toBe(42);
});

test('stack is empty after pop removes all elements from it', () => {
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.peek()).toBeUndefined();
});