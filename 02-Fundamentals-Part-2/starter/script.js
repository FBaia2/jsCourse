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


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1999, 2000, 2001, 2002, 2003];


const ages = [calcAge(years[0]),calcAge(years[0]), calcAge(years[0])];
console.log(ages)

