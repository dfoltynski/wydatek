const jwt = require("jsonwebtoken");
require("dotenv").config();

function auth(req, res, next) {
    const token = req.header("auth-token");
    if (!token) return res.status(401);
    try {
        const verified = jwt.verify(token, process.env.SECRET_KEY);
        if (verified) {
            next();
        } else {
            res.status(401).send("Something went wrong");
        }
    } catch (error) {
        res.status(400).send("You should log in first");
    }
}

module.exports = auth;
