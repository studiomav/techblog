const { Router } = require('express');

const pageRouter = new Router();

pageRouter.get('/', (req, res) => 
{
    res.render('home', {});
});

pageRouter.get('/dashboard', (req, res) => 
{
    res.render('dashboard', {});
});

pageRouter.get('/login', (req, res) => 
{
    res.render('login', {});
});

pageRouter.get('/logout', (req, res) => 
{
    res.render('home', {});
});

pageRouter.get('/register', (req, res) => 
{
    res.render('register', {});
});

module.exports = pageRouter;