const express = require('express');

const homeRoutes = require('./routes/home');

const app = express();

// app.use('/', (req, res, next) => {
//     res.send('<h1>Hello World</h1>');
//   });

app.use('/', homeRoutes);

app.listen(3000)