const { Router } = require('express');

const pageRouter = new Router();

pageRouter.get('/', (req, res) => 
{
    res.render('home',
    {
        name: 'Test',
        val: 42,
    });
});

module.exports = pageRouter;