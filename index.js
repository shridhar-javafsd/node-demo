const express = require('express');
const app = express();
const port = 9999;

app.get('/', (request, response) => {
    response.send('Welcome to my nodejs app...');
    console.log('App...');
});

app.get('/home', (request, response) => {
    response.send('Welcome to home...');
    console.log('home...');
});

app.get('/contact', (request, response) => {
    response.send('Contact me here...');
    console.log('contact...');
});

app.listen(port, () => {
    console.log('App is running on port ' + port);
});





