const express = require("express");

const route = express.Router();


route.get("/signup", (req, res) => {
    res.send("user sign up page");
})


module.exports.route1 = route;