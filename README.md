# Kaizen

Hello, You need to install the following dependencies in order to get this exercises to run

`npm install node-fetch`

`npm i json-server --save-dev`
Now open up `package.json` and configure a script named "`stubapi` for running json-server:
{
    "scripts": {
    "stubapi": "json-server db.json",
  }
}
`npm run stubapi`
You should see the following output in the console:
Resources
  http://localhost:3000/people

  Home
  http://localhost:3000
