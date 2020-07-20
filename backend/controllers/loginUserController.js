const bcrypt = require("bcrypt");
const crypto = require("crypto");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { User, Dashboard } = require("../models/userModel");
require("dotenv").config();

exports.loginUser = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        const match = await bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (match) {
            const payload = user._id;
            const token = jwt.sign({ payload }, process.env.SECRET_KEY, {
                expiresIn: "30m",
            });
            res.header("auth-token", token).send("logged in");
        } else {
            res.json({ mess: "wrong password" });
        }
    } else {
        res.json({ mess: "wrong email" });
    }
};
