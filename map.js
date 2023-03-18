const { performance } = require("perf_hooks");

const items = Array.from({ length: 10_000_000 }, () =>
  Math.floor(Math.random() * 40)
);

const startTime = performance.now();

const result = items.map((item) => item * 2);

const endTime = performance.now();

console.log(`took ${Math.floor(endTime - startTime)} milliseconds`);
