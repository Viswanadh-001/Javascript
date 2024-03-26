var priceList = [1000, 50, 2, 7, 14];

priceList.sort(function (a, b) {
  return a - b;
});

console.log("Ascending - " + priceList);

priceList.sort((a, b) => b - a);

console.log("Descending - " + priceList);