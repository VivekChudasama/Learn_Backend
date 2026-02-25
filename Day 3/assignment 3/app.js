const express = require('express');
const Route = require('./routes/routes.js')
const path = require('path')
const app = express();

app.use(express.static(path.join(__dirname , "public")))

app.use(Route)


app.listen(3001)