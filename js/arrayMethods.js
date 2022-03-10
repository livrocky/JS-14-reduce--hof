const students = [
  {
    name: "James",
    gender: "male",
    age: 25,
    town: "Vilnius",
    hasCar: true,
  },
  {
    name: "Jill",
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
  {
    name: "Jannet",
    gender: "female",
    age: 29,
    town: "Klaipeda",
    hasCar: true,
  },
  {
    name: "Cory",
    gender: "male",
    age: 30,
    town: "Siauliai",
    hasCar: true,
  },
  {
    name: "Minks",
    gender: "male",
    age: 19,
    town: "Siauliai",
    hasCar: false,
  },
];

console.table(students);
//1.  atrinkti i nauja masyva studentus kurie turi masina

const drivers = students.filter((studobj) => studobj.hasCar === true);
console.table(drivers);

//1.1 Atrinkti i nauja masyva studentus kurie turi masina su forEach

const driverEach = [];
students.forEach((studobj) => {
  if (studobj.hasCar === true) {
    driverEach.push(studobj);
  }
});
console.table(driverEach, [`name`, `hasCar`]);

//2. Atrinkti i nauja masyva zmones is Vilniaus

const studVln = students.filter((studobj) => studobj.town === "Vilnius");
console.table(studVln);

// 3. Atrinkti i nauja masyva moteris

const female = students.filter((studobj) => studobj.gender === "female");
console.table(female);

// 4. suzinoti ar yra nors vienas zmogus is Kauno

const arYraIsKauno = students.some((studobj) => studobj.town === "Kaunas");
console.log("arYraIsKauno===", arYraIsKauno);

const arAmziusYraSkaiciusVisur = students.some((studobj) => typeof studobj.age === "number");
console.log("arAmziusYraSkaiciusVisur===", arAmziusYraSkaiciusVisur);

// 5. suskaiciuoti kiek zmoniu yra jaunesni nei 26

// let younger26 = 0;
// students.forEach((studObj) => {
//   if (studObj.age < 26) {
//     younger26++;
//   }
// });
// console.log(younger26);

const younger26 = students.filter((studObj) => studObj.age < 26).length;
console.log("younger26===", younger26);

//6. Grazinti masyva kuriame yra visu zmoniu amziai;
let ages = students.map((studObj) => studObj.age);
console.log("ages===", ages);

// 6.1 Grazinti nauja masyva kurio objektuose butu tik vardas ir miestas

const nameAndTownArray = students.map((studObj) => {
  const newObj = {
    vardas: studObj.name,
    miestas: studObj.town,
  };
  return newObj;
});
console.log("nameAndTownArray===", nameAndTownArray);

//8. Gauti visu zmoniu metu suma.reduce

const totalStudAge = students.reduce((total, studObj) => {
  return total + studObj.age;
}, 0);
console.log("totalStudAge===", totalStudAge);

//9. Gauti visu zmoniu metu vidurki

const totalStudAgeAvg = students.reduce((total, studObj) => total + studObj.age / students.length, 0);
console.log("totalStudAgeAvg===", totalStudAgeAvg);

//10. surasti zmogu vardu "Mike" ir padaryti kad jis nusipirko masina yra tiesa

const mikeFound = students.find((studObj) => studObj.name === "Mike");
console.log(`mikeFound===`, mikeFound);
mikeFound.hasCar = true;
console.log("students===", students);

// 7. sugeneruoti rikiuoto saraso pavidalu htmle visu zmoniu vardus ir kiek jiems metu

function generateList() {
  const olEl = document.createElement("ol");
  students.forEach((studObj) => {
    const liEl = document.createElement("li");
    liEl.textContent = `${studObj.name} age is ${studObj.age}`;
    olEl.append(liEl);
  });
  document.body.append(olEl);
}
generateList();

//salia el teksto li viduje sukuriam mygtuka su textu x
//paspaudus mygtuka trinam ta el

const btnEl = document.createElement("button");
