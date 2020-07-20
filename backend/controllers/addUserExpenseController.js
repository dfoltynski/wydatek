const { User, Dashboard } = require("../models/userModel");

exports.addExpense = async (req, res) => {
    // sprawdzimy czy ma token
    const userId = (await User.findOne({ email: req.body.email }))._id;
    await Dashboard.findOneAndUpdate(
        { user: userId },
        {
            $push: {
                expenses: {
                    for_what: req.body.for_what,
                    amount: req.body.amount,
                    price: req.body.price,
                    date: Date.now(),
                },
            },
        },
        { new: true, useFindAndModify: false }
    );
};
