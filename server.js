const express = require('express');
const handlebars = require('express-handlebars');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const path = require('path');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const hbs = handlebars.create();
const Session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(Session.Store);

const session = {
    secret: 'supersecret',
    cookie: {
        expires: 60 * 60 * 1000
    },
    resave: true,
    rolling: true,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    }),
};

app.use(Session(session));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use('/', routes);

sequelize.sync({ force: false }).then(() =>
{
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () =>
    {
        console.log(`App listening on port ${PORT}`);
    });
});