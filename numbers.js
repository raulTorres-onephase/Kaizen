// 9. Given a base10 number you should be able to find the bit value at a given position  
// No le entiendo ????

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

console.log(convertTo10(10000))