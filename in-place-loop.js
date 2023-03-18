const { performance } = require("perf_hooks");

const items = Array.from({ length: 10_000_000 }, () =>
  Math.floor(Math.random() * 40)
);

const startTime = performance.now();

for (let i = 0; i < items.length; i++) {
  items[i] = items[i] * 2;
}

const endTime = performance.now();

console.log(`took ${Math.floor(endTime - startTime)} milliseconds`);
