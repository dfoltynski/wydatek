const express = require("express");
const router = express.Router();
const auth = require("./verifyToken");

const registerUserController = require("../controllers/registerUserController");
const loginUserController = require("../controllers/loginUserController");
const addUserIncomeController = require("../controllers/addUserIncomeController");
const addUserExpenseController = require("../controllers/addUserExpenseController");
const dashboardController = require("../controllers/dashboardController");

router.get("/api/auth-token", auth, (req, res) => {
    res.sendStatus(200);
});

router.post("/api/register", registerUserController.registerUser);

router.post("/api/login", loginUserController.loginUser);

router.post("/api/add-income", addUserIncomeController.addIncome);

router.post("/api/add-expense", addUserExpenseController.addExpense);

router.post("/api/dashboard", dashboardController.dashboard);

module.exports = router;
