const { add } = require('../../src/backend/core/utils/mathUtils');

describe('mathUtils', () => {
    test('add function adds two numbers', () => {
        expect(add(1, 2)).toBe(3);
    });
});
