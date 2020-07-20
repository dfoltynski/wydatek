const { User, Dashboard } = require("../models/userModel");

exports.addIncome = async (req, res) => {
    // sprawdzimy czy ma token
    const userId = (await User.findOne({ email: req.body.email }))._id;
    await Dashboard.findOneAndUpdate(
        { user: userId },
        {
            $push: {
                income: {
                    from: req.body.client,
                    amount: req.body.amount,
                    price: req.body.price,
                    product: req.body.product,
                    date: Date.now(),
                },
            },
        },
        { new: true, useFindAndModify: false }
    );
    await Dashboard.findOneAndUpdate(
        { user: userId },
        {
            $push: {
                clients: {
                    name: req.body.client,
                },
            },
        },
        { new: true, useFindAndModify: false }
    );
};
