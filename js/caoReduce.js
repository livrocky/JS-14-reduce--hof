//1. Parašyk array su penkiais mėgstamiausiais tavo skaičiais. Su reduce visus juos sudėk ir grąžink vieną skaičių.

const numbers = [12, 66, 24, 64, 45];
const sum = numbers.reduce((a, b) => a + b);
console.log("sum===", sum);

//2. Ne vien skaičius sudėti galime. Nusikopijuok array (["BMW", "MCB", "VWG", "Toyota", "AUDI"]) ir naudojant reduce - grąžink skaičių, kiek šiame array elementų yra su 3 simboliais (p.s. efektyviau turbūt su filter, bet šiuo atveju išbandome reduce).

const cars = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];

const symbol3 = cars.reduce((a, v) => (v.length === 3 ? a + 1 : a + 0), 0);
console.log("symbol3===", symbol3);

//3. Sukurk array su daug skaičių. Grąžink didžiausią skaičių iš array naudojant reduce.

const skaiciai = [10, 30, 45, 66, 89, 3, 43, 102, 65, 69, 34];

const didzSk = skaiciai.reduce((a, b) => (a > b ? a : b));
console.log(didzSk);
