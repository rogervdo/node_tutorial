
const { readFile } = require('fs').promises;
const express = require('express');

const app = express();

app.get('/', async (request, response) => {
    response.send(await readFile('./home.html', 'utf8'));
});


app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))
//! Avoid callback hell (use promises)

//? ------------------------------------------

// const { readFile, readFileSync } = require('fs');
// const txt = readFileSync('./hello.txt', 'utf8');
// const express = require('express');

// const app = express();

// app.get('/', (request, response) => {

//     readFile('./home.html', 'utf8', (err, html) => {
//         if (err) {
//             response.status(500).send('sorry, out of order')
//         }

//         response.send(html);

//     })
// });

// app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))
//! Avoid callback hell (use promises)

//? ------------------------------------------

// const myModule = require('./my-module');

// console.log(myModule);

//? ------------------------------------------

//* Promise-based solution
// const { readFile } = require('fs').promises;

// async function hello(){
// const file = await readFile('./hello.txt', 'utf8');
// }

//? ------------------------------------------

//* We can make our code non-blocking by refactoring into a callback
// const { readFile, readFileSync } = require('fs');
// const txt = readFileSync('./hello.txt', 'utf8');

// readFile('./hello.txt', 'utf8', (err, txt) => {
//     console.log(txt)
// });

// console.log('do this ASAP');

//? ------------------------------------------

//const { readFile, readFileSync } = require('fs');

// const txt = readFileSync('./hello.txt', 'utf8');

// console.log(txt);

// console.log('do this ASAP');

//* Blocking == must finish before any other code runs.

//? ------------------------------------------

// const { EventEmitter } = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('lunch', () => {

//     console.log('yum 🔥')
// })

// eventEmitter.emit('lunch');
// eventEmitter.emit('lunch');

//? ------------------------------------------

// process.on('exit', function() {

//     // do something!!
// })

//? ------------------------------------------

// console.log(process.platform);
// console.log(process.env.USER);

//? ------------------------------------------

// console.log(global.luckyNum);

// global.luckyNum = '23';

// console.log(global.luckyNum);

//? ------------------------------------------

//console.log('Hello world');