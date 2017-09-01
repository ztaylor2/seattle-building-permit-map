'use strict';

const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();

// database stuff

// const conString = process.env.DATABASE || 'postgres://localhost:5432/kilovolt';
// const client = new pg.Client(conString);
//
// client.connect();
// client.on('error', err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
