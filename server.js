const express = require('express');
const handlebars = require('express-handlebars');

const app = express();
const hbs = handlebars.create();

app.listen(3001, () =>
{
    console.log('App listening on port 3001');
})