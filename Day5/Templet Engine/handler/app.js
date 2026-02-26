const path = require('path');

const express = require('express');

const {engine} = require('express-handlebars');

const app = express();

app.engine(
  'hbs',
  engine({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main-layout',
    extname: 'hbs'
  })
);

app.set('view engine', 'hbs');
app.set('views', 'views');

const Data = require('./routes/route');

app.use(Data.routers);

app.use((req, res, next) => {
    res.status(404).render('404' , {title : '404'})
});

app.listen(3000);
