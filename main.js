const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const { readFileSync } = require('fs');
const path = require('path');

// get all files
const homePage = readFileSync('./Public/index.html');
const homeStyles = readFileSync('./Public/Styles/main.css');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html'})
    res.write(homePage);
    res.end();
})

app.get('/main.css', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/css'});
    res.write(homeStyles);
    res.end();
})

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
