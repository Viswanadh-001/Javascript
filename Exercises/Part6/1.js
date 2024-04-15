let frenchfriesCount = Number(prompt("How many french fries (60rs per piece) do you want to order ?"));
let burgersCount = Number(prompt("How many burgers (50rs per piece) do you want to order ?"));
let chowminCount = Number(prompt("How many plates of chowmin (100rs per plate) do you want to order?"));
let manchurianCount = Number(prompt("How many plates of Manchurian (80rs per plate) do you want to order?"));
let cokesCount = Number(prompt("How many Cokes (50 per piece) do you want to order ?"));

frenchfriesCount = frenchfriesCount <= 0 ? 0 : frenchfriesCount;
burgersCount = burgersCount <= 0 ? 0 : burgersCount;
chowminCount = chowminCount <= 0 ? 0 : chowminCount;
manchurianCount = manchurianCount <= 0 ? 0 : manchurianCount;
cokesCount = cokesCount <= 0 ? 0 : cokesCount;

const frenchfriescost = frenchfriesCount * 60;
const burgerscost = burgersCount * 50;
const chowmincost = chowminCount * 100;
const manchuriancost = manchurianCount * 80;
const cokecost = cokesCount * 50;

const total = frenchfriescost + burgerscost + chowmincost + manchuriancost + cokecost;

console.log("Total Bill: " + total + " Rs");