const express = require("express");

const route = express.Router();


route.get("/login", (req, res) => {
    res.send("user logged in");
})


module.exports = route;