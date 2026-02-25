const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const users = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

const userlist = require('./routes/routes')

app.use(userlist.routers)

app.use((req, res, next) => {
    res.status(404).render('404' , {pageTitle : '404'})
});

app.listen(3000);
