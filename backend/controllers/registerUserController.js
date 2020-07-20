const bcrypt = require("bcrypt");
const { User, Dashboard } = require("../models/userModel");
const Joi = require("@hapi/joi");

const saltRounds = 10;

exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    // const schema = Joi.object({
    //     name: Joi.string().required(),
    //     email: Joi.string().email().required(),
    //     password: Joi.string().min(6).required(),
    // });

    createUser = () => {
        // const validation = schema.validate({
        //     name,
        //     email,
        //     password,
        // });

        const hashedPassword = bcrypt.hashSync(password, saltRounds);

        return User.create({
            name,
            email,
            password: hashedPassword,
        }).then((docUser) => {
            return docUser;
        });
    };

    createDashboard = (user) => {
        return Dashboard.create(user).then((docDashboard) => {
            return docDashboard;
        });
    };

    let user = await createUser();
    let dashboard = await createDashboard({ user: user._id });
};
