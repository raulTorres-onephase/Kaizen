// 1. Determine the location of an item in an array

const team = ['Michael', 'Scottie', 'Dennis', 'Luke', 'Steve']

const itemLocation = (str) => {
    let query = team.indexOf(str)
    return query
}

//console.log(itemLocation('Scottie'))

// 2. Sum the items of an array

const numbers = [1,2,3,4,5,6,7,8,9]

const sumArray = (arr) => {
    let total = 0
    arr.forEach(number => {
       total = total + number 
    });
    return total
}

//console.log(sumArray(numbers))

// 3. Add an item at the beginning of an array

const things = [1, 'box', 'three', 4, 'pencil', 56]

const addItemAtBegining = (item, arr) => {
    arr.splice(0, 0, item)
    return arr
}

//console.log(addItemAtBegining('hombres g', things))

// 4. Remove the first item of an array

const spanishRockBands = ['Heroes del Silencio', 'Mana', 'Mago de Oz', 'Coda', 'Caifanes', 'Juanes'] 

const removeItemAtBegining = (arr) => {
    arr.splice(0, 1)
    return arr
}

//console.log(removeItemAtBegining(spanishRockBands))
