// 1. Determine the location of an item in an array

const team = ['Michael', 'Scottie', 'Dennis', 'Luke', 'Steve'];

// const itemLocation = (str, arr) => {
//     let query = arr.indexOf(str)
//     return query
// }
const itemLocation = (str, arr) => {
  let found;
  arr.forEach((value, i) => {
    if (str === value) {
      found = i;
    }
  });
  return found;
};

//console.log(itemLocation('Scottie', team));

// 2. Sum the items of an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sumArray = (arr) => {
  let total = 0;
  arr.forEach((number) => {
    total += number;
  });
  return total;
};

//console.log(sumArray(numbers))

// 3. Add an item at the beginning of an array

const things = [1, 'box', 'three', 4, 'pencil', 56];

const addItemAtBegining = (item, arr) => {
  arr.splice(0, 0, item);
  return arr;
};

//console.log(addItemAtBegining('hombres g', things))

// 4. Remove the first item of an array

const spanishRockBands = [
  'Heroes del Silencio',
  'Mana',
  'Mago de Oz',
  'Coda',
  'Caifanes',
  'Juanes',
];

const removeItemAtBegining = (arr) => {
  arr.splice(0, 1);
  return arr;
};

//console.log(removeItemAtBegining(spanishRockBands))

// 5. Add an item anywhere in the array
const harryPotterCharacters = [
  'Harry',
  'Ron',
  'Hermione',
  'Hagrid',
  'Dumbledore',
  'Lupin',
  'Sirius',
  'Snape',
  'Voldemort',
  'Bellatrix',
  'Dobby',
  'James',
];

const addItemRandomly = (item, arr) => {
  let arrLongitude = arr.length;
  let randomNumber = Math.ceil(Math.random() * (arrLongitude - 1));
  console.log(randomNumber);
  arr.splice(randomNumber, 0, item);
  return arr;
};

//console.log(addItemRandomly('Lucius', harryPotterCharacters))

// 6. Find duplicates in an array
const names = [
  'carlos',
  'rodrigo',
  'jorge',
  'miguel',
  'jorge',
  'enrique',
  'alfredo',
];
const duplicateNumbers = [1, 2, 3, 3, 4, 5, 6, 8, 5, 3, 2, 1];
const n = [1, 2, 3, 4, 5, 6];

const findDuplicates = (arr) => {
  let duplicates = undefined;
  let pointer1 = 0;
  let pointer2 = arr.length - 1;
  while (pointer1 <= pointer2) {
    valueOne = arr[pointer1];
    valueTwo = arr[pointer2];
    if (valueOne === valueTwo) {
      duplicates = valueOne;
      return true;
    } else if (valueOne !== valueTwo) {
      pointer1++;
      pointer2--;
    }
  }
  return false;
};

//console.log(findDuplicates(names))

// 7. Join together two arrays

const animals = ['lion', 'cheeta', 'puma', 'cougar', 'tiger'];
const animalPrays = ['zebra', 'antilop', 'deer', 'donkey', 'horse'];

const joinArrays = (arr1, arr2) => {
  const newArr = [...arr1, ...arr2];
  return newArr;
};

//console.log(joinArrays(animals, animalPrays))

// 8. Find all occurrences of an item in an array
// const duplicateNumbers = [1, 2, 3, 3, 4, 5, 6, 8, 5, 3, 2, 1];
// const names = [
//     'carlos',
//     'rodrigo',
//     'jorge',
//     'miguel',
//     'jorge',
//     'enrique',
//     'alfredo',
//   ];

const findAllOcurrencies = (item, arr) => {
  let counter = 0;
  let pointer1 = 0;
  while (pointer1 <= arr.length + 1) {
    valueOne = arr[pointer1];
    if (valueOne === item) {
      counter++;
      pointer1++;
    } else if (valueOne !== item) {
      pointer1++;
    }
  }
  if (counter === 1) {
    return `The value ${item} exists but is NOT repeated`;
  }
  return `The value ${item} is repeated ${counter} time(s).`;
};

//console.log(findAllOcurrencies('jorge', names));

