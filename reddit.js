const path = require('path');
const fs = require('fs');
const request = require('request');

let dataPath = path.join(__dirname, 'popular-articles.json');
let articleArray = [];

request('https://reddit.com/r/popular.json', (err, res, body) => {

    if(err) console.log(err);

    JSON.parse(body).data.children.forEach(item => {
        articleArray.push({
        "title": `${item.data.title}`,
        "url": `${item.data.url}`,
        "author": `${item.data.author}`
        });  
    });
    fs.writeFileSync(dataPath, JSON.stringify(articleArray));    
});