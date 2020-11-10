// 9. Given a base10 number you should be able to find the bit value at a given position  
let num = 233
const getValueAndPosition = (number, result = []) => {
    let base = 2
    let calculateRemainder = (number % base)
    result.push(calculateRemainder)
    let divisionNumber = Math.floor(number / base)
    if(divisionNumber < 1){
       return;
    } else {
        getValueAndPosition(divisionNumber, result)
    }
    let resultBeautify = result.toString().replace(/,/, '')
    return `The binary number is (${resultBeautify})`
}

console.log(getValueAndPosition(num))

// 10. Return the base10 representation of a binary string

const convertTo10 = (binary) => {
    let poweredResult = 0
    const arr = Array.from(String(binary), Number);
    arr.reverse()
    arr.forEach( (digit, i) =>{
        let powered = Math.pow(2, i) * digit
        poweredResult += powered
    })
   return poweredResult
}

//console.log(convertTo10(10000))
