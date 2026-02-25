const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const app = express();
const router = express.Router();

const shopRoutes = require("./routes/shop")
const adminRoutes = require("./routes/admin")

app.use(bodyParser.urlencoded({extended:false}))

app.use(shopRoutes)
app.use("/admin",adminRoutes)

router.use( "", (req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, "views" , "404page.html"))
})

app.listen(3000)

