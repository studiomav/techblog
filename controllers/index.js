const express = require('express');

const app = new express();

app.route('/').get((req, res) =>
{
    res.render('home', {});
});

app.route('/dashboard').get((req, res) =>
{
    res.render('dashboard', {});
});

app.route('/login').get((req, res) =>
{
    res.render('login', {});
}).post((req, res) =>
{
    res.send('POST request for login');
});

app.route('/logout').get((req, res) =>
{
    res.render('home', {});
});

app.route('/register').get((req, res) =>
{
    res.render('register', {});
}).post((req, res) =>
{
    res.send('POST request for register');
});

module.exports = app;