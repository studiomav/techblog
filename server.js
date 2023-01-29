const express = require('express');
const handlebars = require('express-handlebars');
const routes = require('./controllers');

const app = express();
const hbs = handlebars.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')

app.use('/', routes)

app.listen(3001, () =>
{
    console.log('App listening on port 3001');
})