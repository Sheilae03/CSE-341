const express = require('express');

const app = express();

/* app.use((req, res, next) => {
    console.log('First Middleware');
    next();
});

app.use((req, res, next) => {
    console.log('Second Middleware');
    res.send('<p>Assignment solved</p>');
}); */

app.use('/users', (req, res, next) => {
    console.log('/users middleware');
    res.send('<p>Middleware handles /users</p>');
});

app.use('/', (req, res, next) => {
    console.log('/ middleware');
    res.send('<p>Middleware handles/</p>');
});

app.listen(5000);