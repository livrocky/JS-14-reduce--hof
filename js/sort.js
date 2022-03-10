const students = [
  {
    name: "Tony",
    gender: "make",
    age: 25,
    town: "Vilnius",
    hasCar: true,
  },
  {
    name: "Albert",
    gender: "female",
    age: 28,
    town: "Kaunas",
    hasCar: true,
  },
  {
    name: "Mike",
    gender: "male",
    age: 18,
    town: "Kaunas",
    hasCar: false,
  },
  {
    name: "Jane",
    gender: "female",
    age: 22,
    town: "Klaipeda",
    hasCar: false,
  },
];

//string tipo masyvo rykiavimas sort()
const fruits = ["banana", "mano", "apple", "orange"];
console.log("fruits===", fruits);
//masyvu rikiavimas
//veikia gerai tik ant strip tipo duomenu
fruits.sort();
console.log("fruits.sort===", fruits);
fruits.reverse();
console.log("fruits.reverse===", fruits);

//number tipo masyvo rikiavimas
const numbers = [5, 1, 2, 3, 4, 10, 50, 112];
console.log("numbers===", numbers);

//a-z sort
numbers.sort((a, b) => a - b);
//z-a sort
numbers.sort((a, b) => b - a);

console.log("numbers===", numbers);

//isrykiuoti students array pagal amziu

students.sort((studObjA, studObjB) => studObjA.age - studObjB.age);
console.log("students===", students);

//isrykiuoti students array pagal varda

students.sort((studObjA, studObjB) => {
  if (studObjB.name > studObjA.name) {
    return -1;
  } else {
    return 1;
  }
});
