const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('home',
        {
            title: 'home page ',
            message: 'rendering pug templet',
            items: ["item1", "item2", "item3"]
        }
    )
})

exports.routers = router