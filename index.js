const bodyParser = require('body-parser');
const express = require('express');

const homeRoutes = require('./routes/home');
const productRoutes = require('./routes/product');

const app = express();

app.use(bodyParser.json());

// app.use('/', (req, res, next) => {
//     res.send('<h1>Hello World</h1>');
//   });

app.use('/', homeRoutes);
app.use('/', productRoutes);

app.listen(3000)