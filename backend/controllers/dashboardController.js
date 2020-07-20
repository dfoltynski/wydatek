const { User, Dashboard } = require("../models/userModel");

exports.dashboard = async (req, res) => {
    const { email } = req.body;
    const userId = await User.findOne({ email });
    const info = await Dashboard.findOne({ user: userId }).populate("user");

    res.send({ info });
};
