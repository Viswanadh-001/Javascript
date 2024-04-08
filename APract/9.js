let prices = [250, 645, 300, 900, 50];

const discountper = 10;

for(let i = 0; i < prices.length; i++){
   let disc = prices[i] * discountper / 100;

    let discprice = prices[i] - disc;
    prices[i] = discprice;
}

console.log(prices);