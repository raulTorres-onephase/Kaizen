// 16. You should be able to detect a number in a string 
// const x = 'we are number one'
// const detectANumber = (str) => {
//     let strToBeChecked = str
//     let checkPoint = /\d/g;
//     let result = checkPoint.test(strToBeChecked)
//     return result
// }
//console.log(detectANumber(x))

// 17. You should be able to determine whether a string matches a pattern => the pattern is XXX-XXX-XXXX where all X's are digits  
const number = '634-504-2139' 
const detectPattern = (str) =>{
    let numToBeChecked = str
    let checkPoint = /^\d{3}\-\d{3}\-\d{4}$/;
    let result = checkPoint.test(numToBeChecked)
    if(!result){
        return 'The string does not match the pattern'
    } else {
        return 'The pattern is correct'
    }
}

console.log(detectPattern(number))