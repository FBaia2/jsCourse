"use strict";

// function logger() {
//     console.log("My name is jonas")
// }

// logger();
// logger();
// logger();
// logger();
// logger();

// function fruitProcessor(banana, apple) {
//     const juice = `juice with ${banana} bananas and ${apple} apples`;
//     return juice;
// }






// function describeCountry(country, population, capitalCity) {
//         const descriptions = `${country} has ${population} people and it's capital city is ${capitalCity}`;
//         return descriptions;
// }


// const myCountry = describeCountry("Portugal", "6 million", "Lisbon");
// const theyCountry = describeCountry("sweden", "3 million", "Lisbn");
// const yourCountry = describeCountry("oslo", "2 million", "isbon");



// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// // 

// function calcAge2(birthYear) {
//     const age2 = 2037 - birthYear;
//     return age2;
    
// }

// const age2= calcAge2(1991)
// console.log(age1);

// // 

// const calcAge3 = function(birthYear) {
//     return 2037 - birthYear;
// }
// const age3 = calcAge3(1991);
// console.log(age3);




// const portugal = percentageOfWorld1(11);

// console.log(portugal);

// const percentageOfWorld2 = function(population2) {
//     return  population2 * 100 / 7900;
// }

// const populus2 = percentageOfWorld2(11);
// console.log(populus2)

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(2000);
// console.log(age3);

// const percentageOfWorld3 = population3 => population3 * 100 / 7900;
// const tshhs = percentageOfWorld3(11)
// console.log(tshhs)

// function percentageOfWorld1(numba) {
//     return  numba * 100 / 7900;
// }

// const describePopulation = function(country, population) {
//     const percent1 = percentageOfWorld1(population);
//     const final = `${country} has ${population} million people, wich is about ${percent1} % of the world`;
//     console.log(final)
// }


// describePopulation("Portugal", 11);
// describePopulation("Spain", 50);
// describePopulation("USA", 110);

// // 

// function percentageOfWorld1(numba) {
//     return  numba * 100 / 7900;
// }

// const describePopulation = function(country, population) {
//     const percent1 = percentageOfWorld1(population);
//     const final = `${country} has ${population} million people, wich is about ${percent1} % of the world`;
//     return final;
// }


// console.log(describePopulation("Portugal", 11));
// console.log(describePopulation("Spain", 50));
// console.log(describePopulation("USA", 110));

// const calcAverage = (param1, param2, param3) => {
//     const avg = (param1 + param2 + param3) / 3
//     return avg;
// };


// const avgDolphins = calcAverage(44, 23 , 71);
// const avgKoalas=  calcAverage(85, 54, 41);
// console.log(avgDolphins, avgKoalas)




// const checkWinner = function(avgDolphins, avgKoalas) {
//     if (avgDolphins >=  avgKoalas){
//         console.log(`your gay`);
//     } else if (avgKoalas > avgDolphins){
//         console.log(`your mom`)
        
//     } else {
//         return -1;

//     }
// }

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// const calcAverage = (param1, param2, param3) => {
//     const avg = (param1 + param2 + param3) / 3
//     return avg;
// };

// // Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(650, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log('No team wins...');
//   }
// }
// checkWinner(scoreDolphins, scoreKoalas);



// const friends = [1,2,3,4,5,6,7,8,9]
// friends[friends.length -1] = 4
// console.log(friends)
// const firstName = "filipe"
// const filipe = [firstName, "baia-baia", 2023-1999, "teacher", friends]
// console.log(filipe);


// const calcAge = function (birthYear) {
// return 2037 - birthYear;
// }
// const years = [1999, 2000, 2001, 2002, 2003];


// const ages = [calcAge(years[0]),calcAge(years[0]), calcAge(years[0])];
// console.log(ages)

// const yourMom = ["this", 1, 2, 2, 2];
// console.log(yourMom[0],yourMom[2])


// const populations = [11, 20, 30, 40];

// if (populations.length === 4) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// const percentageOfWorld = function(population) {
//     return population * 100 / 7900;
// };

// const percentages = populations.map(percentageOfWorld);

// console.log(percentages);

// const neightbours = ["Portugal","France"];
// console.log(neightbours);
// neightbours.push("Utopia");
// console.log(neightbours);
// neightbours.pop();
// console.log(neightbours);

// if (!neightbours.includes("Germany")){
//     console.log('Probably not a central European country :D')
// } 
// const numba1 = neightbours.indexOf("Portugal")
// const numba2 = neightbours.indexOf("France")
// console.log(numba1, numba2);

// neightbours[numba1] = "Spain";
// neightbours[numba2] = "Switzerland";
// console.log(neightbours);

// const calcTip = function (bill) {
//     let tipPercentage = 0.15;
//     if (bill => 50 && bill <= 300) {
//       tipPercentage = 0.15;
//     } else {
//       tipPercentage = 0.20;
//     }
//     return bill * tipPercentage;
//   };
  
//   console.log(calcTip(100)); // 15
  
//   const bills = [125, 555, 44];
//   const tips = [];
//   const total = [];
  
//    for (let i = 0; i < bills.length; i++) {
//     tips[i] = calcTip(bills[i]);
//     total[i] = bills[i] + tips[i];
//   }
  
//   console.log(tips); // [18.75, 83.25, 8.8]
//   console.log(total); // [143.75, 638.25, 52.8]

// const myCountry = {
//     country: "Portugal",
//     capital: "Lisbon",
//     language: "Portuguese",
//     population: "11 Million",
//     neighbours: ["Spain", "nothing to test the array"],
//     yourMom: []
// };
// console.log(myCountry)

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
//   ];
  
//   const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
//   };
  
  

//   const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
//   };
//   console.log(jonas);
  
//   console.log(jonas.lastName);
//   console.log(jonas['lastName']);
  
//   const nameKey = 'Name';
//   console.log(jonas['first' + nameKey]);
//   console.log(jonas['last' + nameKey]);
  
//   // console.log(jonas.'last' + nameKey)
  
//   const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
  
//   if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
//   } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
//   }
  
//   jonas.location = 'Portugal';
//   jonas['twitter'] = '@jonasschmedtman';
//   console.log(jonas);
  
// console.log(`${jonas.firstName} has ${jonas.friends.length}
//  friends and his best frined is called ${jonas.friends[0]} `);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYeah: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,
  
//     // calcAge: function (birthYeah) {
//     //   return 2037 - birthYeah;
//     // }
  
//     // calcAge: function () {
//     //   // console.log(this);
//     //   return 2037 - this.birthYeah;
//     // }
  
//     calcAge: function () {
//       this.age = 2037 - this.birthYeah;
//       return this.age;
//     },
  
//     getSummary: function () {
//       return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }
//   };
  
//   console.log(jonas.calcAge());
  
//   console.log(jonas.age);
//   console.log(jonas.age);
//   console.log(jonas.age);
//   console.log(jonas.getSummary());

// const myCountry = {
//     country: "Portugal",
//     capital: "Lisbon",
//     language: "Portuguese",
//     population: "11 Million",
//     neighbours: ["Spain", "nothing to test the array"],
//     describe: function() {
//         return `${this.country} is my country and it's capital is ${this.capital}`
//     }
// };
// console.log(myCountry.describe());


// let mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.BMI = this.mass / (this.height * this.height);
//         return this.BMI;
//     }
// };

// let john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.BMI = this.mass / (this.height * this.height);
//         return this.BMI;
//     }
// };

// if (mark.calcBMI() > john.calcBMI()) {
//     console.log(`${mark.fullName}'s BMI (${mark.BMI.toFixed(2)}) is higher than ${john.fullName}'s (${john.BMI.toFixed(2)})!`);
// } else if (mark.BMI < john.BMI) {
//     console.log(`${john.fullName}'s BMI (${john.BMI.toFixed(2)}) is higher than ${mark.fullName}'s (${mark.BMI.toFixed(2)})!`);
// } else {
//     console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.BMI.toFixed(2)})`);
// }


// for (let i = 1; i <= 50; i++) {
//   console.log(`'Voter number ${i} is currently voting'`);
// }

// const jonas = [
//     "jonas",
//     "baia",
//     2030-1999,
//     "tech",
//     ["filipe", "joao", "albert"]
// ];

// const yourmom = []

// for (let i = 0; i <= jonas.length; i++) {
//     console.log(jonas[i], typeof jonas[i]);
//     yourmom[i] = typeof jonas[i];
// }
// console.log(yourmom)


// const years = [1999, 2000, 2003, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// ages.push(1);
// console.log(ages);

//  const listOfNeighbours = [
//     ['Canada', 'Mexico'], 
//     ['Spain'],
//      ['Norway', 'Sweden', 'Russia']];

//      for (let i = 0; i < listOfNeighbours.length; i++) {
//         for (let j = 0; j < listOfNeighbours[i].length; j++) {
//           console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
//         }
//       }
// let rep = 1;
// while (rep <= 100) {
//     console.log(rep);
//     rep++;
// }




const bills = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];


const calcTip = function (bill) {
        let tipPercentage = 0.15;
        if (bill => 50 && bill <= 300) {
        tipPercentage = 0.15;
        } else {
        tipPercentage = 0.20;
        }
        return bill * tipPercentage;
    };

