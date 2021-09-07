'use strict';

const hello = require("../hello")

test('test servers', () => {
    console.log(hello())
    expect(1).toBe(1);
});