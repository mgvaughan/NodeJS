const path = require('path');
const fs = require('fs');
const request = require('request');

// console.log(path.join(__dirname, 'downloads'));
let downloadPath = path.join(__dirname, 'downloads');

request('https://reddit.com/r/popular.json', (err, res, body) => {

    if(err) console.log(err);

    JSON.parse()


})

