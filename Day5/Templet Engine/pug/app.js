const path = require('path');

const express = require('express');

const app = express();

app.set('view engine' , 'pug')
app.set('views' , 'views')

const Data = require('./routes/route');

app.use(Data.routers);

app.use((req, res, next) => {
    res.status(404).render('404' , {pageTitle : '404'})
});

app.listen(3000);
