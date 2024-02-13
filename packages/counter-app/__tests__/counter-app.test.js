'use strict';

const counterApp = require('..');
const assert = require('assert').strict;

assert.strictEqual(counterApp(), 'Hello from counterApp');
console.info('counterApp tests passed');
