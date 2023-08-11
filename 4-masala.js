let prices = { Orange: 10000, Apple: 12000, Tangerine: 8000, Banana: 20000 };
let totalCost = Object.values(prices).reduce((total, price) => total + price);

console.log(totalCost);
