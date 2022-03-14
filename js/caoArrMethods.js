const people = [
  {
    name: "Petras",
    age: 18,
  },
  {
    name: "Jonas",
    age: 15,
  },
  {
    name: "Antanas",
    age: 20,
  },
  {
    name: "Urtė",
    age: 10,
  },
  {
    name: "Diana",
    age: 25,
  },
  {
    name: "Ieva",
    age: 16,
  },
];

//1. Prafiltruojame masyvą, kad rodytų tik pilnamečius.

// const legalAge = people.filter((personObj) => personObj.age >= 18);
// console.log("legalAge===", legalAge);

//2. Pakoreguojame aukščiau nurodytą pratimą, kad pilnamečių array rodytų tik vardus (amžius jau nesvarbu). Tai rezultatas turi būti: ["Petras", "Antanas", "Diana"].

const legalAge = people
  .filter((personObj) => personObj.age >= 18)
  .map((person) => person.name)
  .sort();
console.log(legalAge);

// const nameOnly = legalAge.map((personObj) => personObj.name);
// console.log(nameOnly);

//3.  Antro pratimo array A-Z tvarka išrykiuokite. Optimizuokite kodą, kad visas veiksmas tilptų į vieną eilutę.

// const sorted = nameOnly.sort();
// console.log(sorted);

//4. Sukurkite funkciją. Ji priims vieną argumentą - array su objektais, kurie turės du parametrus - name ir price. Grąžins - brangiausią ir pigiausią prekes. Turi veikti padavus neribotą kiekį elementų (pavyzdyje apačioje - tik du)..

const drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
  { name: "bread", price: 2 },
  { name: "whiskey", price: 149 },
  { name: "grape-soda", price: 11 },
  { name: "cheese", price: 17 },
  { name: "milk", price: 3 },
  { name: "flowers", price: 39 },
  { name: "cupcakes", price: 8 },
  { name: "chicken", price: 100 },
];

function fn(items) {
  items.sort((a, b) => a.price - b.price);
  return { pigiausias: items[0].name, brangiausias: items[items.length - 1].name };
}
console.log(fn(drinks));
