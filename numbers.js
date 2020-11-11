// Creating personal reverse function
const ownReverse = (arr) => {
    let newArr = []  
    let long = arr.length;
    for (let i = 0; i < arr.length; i++) {
      let rev = (long - i) - 1;
      newArr.push(arr[rev]);
    }
    return newArr
  };
  
  //console.log(ownReverse(test));

// 9. Given a base10 number you should be able to find the bit value at a given position
const data = 233;
const pos = 8;
const getValueAndPosition = (number, result = [], position) => {
  let base = 2;
  let findIndex = position;
  let calculateRemainder = number % base;
  result.push(calculateRemainder);
  let divisionNumber = Math.floor(number / base);
  if (divisionNumber < 1) {
    return;
  } else {
    getValueAndPosition(divisionNumber, result);
  }
  let pos = result.filter((value, i) => i + 1 === findIndex);
  if (findIndex > result.length) {
    return `${findIndex} is too high, try a lower number!`;
  }
  let resultBeautify = result.toString().replace(/,/g, '');
  return `The binary number is ${resultBeautify} and the position at #${findIndex} is ${pos}`;
};

//console.log(getValueAndPosition(data, [] ,pos))

// 10. Return the base10 representation of a binary string

const convertTo10 = (binary) => {
  let poweredResult = 0;
  const arr = Array.from(String(binary), Number);
  ownReverse(arr);
  arr.forEach((digit, i) => {
    let powered = Math.pow(2, i) * digit;
    poweredResult += powered;
  });
  return poweredResult;
};

console.log(convertTo10(10010111))


