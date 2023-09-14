import { strict as assert } from "node:assert";
import { capitalize } from "../src/capitalize.js";

// assert.deepEqual({}, { a: 42 });

assert.deepEqual({ a: 42 }, { a: 42 });

console.log('Всё ок!');