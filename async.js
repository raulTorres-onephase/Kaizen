const fetch = require('node-fetch')

const endpoint = 'http://localhost:3000/people'

async function getData(url) {
    const response = await fetch(url)
    const data = await response.json()
    const people = data.map(person => {
        return person.name
    })
    return people.sort()
}

( async () =>{
    console.log(await getData(endpoint))
})()
