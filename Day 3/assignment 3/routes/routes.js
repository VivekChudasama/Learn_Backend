const express = require('express');
const router = express.Router();
const path = require("path");

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', "views", "homePage.html"));
});

router.get("/user", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../", "views", "userList.html"));
});

module.exports = router;