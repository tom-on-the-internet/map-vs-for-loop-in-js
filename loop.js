const { performance } = require("perf_hooks");

const items = Array.from({ length: 10_000_000 }, () =>
  Math.floor(Math.random() * 40)
);

const startTime = performance.now();

let result = [];
for (let index = 0; index < items.length; index++) {
  result[index] = items[index] * 2;
}

const endTime = performance.now();

console.log(`took ${Math.floor(endTime - startTime)} milliseconds`);
