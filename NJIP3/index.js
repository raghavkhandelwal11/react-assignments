const express = require("express");
const route1 = require("./routes/login");
const route2 = require("./routes/signup");
const cors = require("cors");



const signupRoute = route2.route1;

const app = express();

const middleware = (req, res, next) => {
    console.log("this middleware is applicable to all the routes");
    next();
}



app.use(middleware);

app.use(cors());

app.use(express.static("public"));

app.use(route1);

app.use(signupRoute);

app.get("/", (req, res) => {
    res.send("welcome")
})



app.get("/page2", (req, res) => {
    res.send("this is page 2");
})



app.listen(3500, () => {
    console.log("this is server running on port 3500");
})




