const path = require('path');
const fs = require('fs');

var dataPath = path.join(__dirname, '../chirps.json');

fs.readFile(dataPath, {
    encoding: "UTF-8"
}, (err, data) => {
    console.log(data);
});