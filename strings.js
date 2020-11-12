const ownReverse = (arr) => {
  let newArr = [];
  let long = arr.length;
  for (let i = 0; i < arr.length; i++) {
    let rev = long - i - 1;
    newArr.push(arr[rev]);
  }
  return newArr;
};

// 14. You should be able to reduce duplicate characters to a maximum allowed
const str = 'aaaabbbbbbbbcccccccddddddeeeeeff';
const timesAllowed = 3;

const reduceString = (string, number) => {
 
  let count = 0;
  let result = '';
  for (let i = 0; i < string.length; i++) {
     let value = string[i]
    if (value === string[i + 1]) {
      count++;
      if (count < number) {
        result += value;
      }
    } else {
      count = 0;
      result += value;
    }
  }
  return result;
};

console.log(reduceString(str, timesAllowed));
// 15. You should be able to reverse a string
const sentence = 'me gusta mucho programar';

const reverseString = (str) => {
  const separate = str.split('');
  const reverse = ownReverse(separate);
  const join = reverse.join('');
  console.log(join);
};

//console.log(reverseString(sentence))
