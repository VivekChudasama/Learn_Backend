const path = require('path');

//mainModule refers to the app.js file in this project 
module.exports = path.dirname(process.mainModule.filename)