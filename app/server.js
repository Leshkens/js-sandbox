'use strict';

const express = require('express');

const port = 80;
const host = '0.0.0.0';

const app = express();

app.use(express.static('./public'));
app.set('views', './views');
app.set('view engine', 'ejs');

require('./routes')(app);

app.listen(port, host);