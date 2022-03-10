//1. Pasirašyk sąrašą su savo draugų vardais. A-Z tvarka išrykiuok.

const names = ["Rokas", "Alfredas", "Ona", "Paulius", "Justas", "Karolis", "Dainius"];
names.sort();

console.log("names===", names);

//2. Pakoreguok pirmame pratime esantį sort, kad išrykiuotų Z-A tvarka.

// names.reverse();
// console.log("names===", names);

names.sort((a, b) => (b > a ? 1 : -1));
console.log(names);

//3. Nusikopijuok array ([5, 10, 20, 11, 12, 1, 0, 14, 25]) ir su JS sudėliok mažėjimo tvarka (nuo didžiausio, iki mažiausio).

const numbers = [5, 10, 20, 11, 12, 1, 0, 14, 25];
numbers.sort((a, b) => b - a);
console.log(numbers);

//4. Nusikopijuok array ([10, 5, 20, 4]) ir grąžink didžiausią skaičių (vieną skaičių).

const numbers1 = [10, 5, 20, 4];
numbers1.sort((a, b) => b - a);
console.log(numbers1[0]);
