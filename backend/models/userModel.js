const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requiredString = {
    type: String,
    required: true,
};

const requiredNumber = {
    type: Number,
    default: 0,
};

const userSchema = new Schema(
    {
        name: requiredString,
        email: requiredString,
        password: {
            type: String,
            required: true,
            min: 6,
        },
    },
    {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    }
);

const dashboardSchema = new Schema(
    {
        balance: requiredNumber,
        income: [],
        expenses: [],
        clients: [],
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        },
    },
    {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    }
);

const User = mongoose.model("user", userSchema);
const Dashboard = mongoose.model("dashboard", dashboardSchema);

module.exports = {
    User,
    Dashboard,
};
