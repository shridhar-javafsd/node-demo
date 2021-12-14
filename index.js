const express = require('express');
const app = express();
const port = 9999;

app.get('/', (request, response) => {
    response.send('Welcome to my nodejs app...');
    console.log('App is running...');
});

app.listen(port, () => {
    console.log('App is running on port ' + port);
});





