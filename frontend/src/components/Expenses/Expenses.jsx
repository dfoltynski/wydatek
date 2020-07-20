import React, { useState, useEffect } from "react";

import { addExpense, fetchDashboardFields } from "../../API";
import styles from "./Expenses.module.css";
import Navbar from "../Navbar/Navbar";

const Expenses = () => {
    const [for_what, setFor_What] = useState("");
    const [amount, setAmount] = useState(0);
    const [price, setPrice] = useState(0);

    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const fetchDashboard = async () => {
            const email = localStorage.getItem("email");
            const res = await fetchDashboardFields(email);
            if (!(res.data.info === null)) {
                setExpenses(res.data.info.expenses);
            }
        };
        fetchDashboard();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();

        addExpense(for_what, amount, price, localStorage.getItem("email")).then(
            () => {
                let addExpensePrompt = document.getElementById(
                    "addExpensesPrompt"
                );
                addExpensePrompt.style.display = "none";
                window.location.reload();
            }
        );
    };

    const showExpenses = (e) => {
        e.preventDefault();
        let addExpenses = document.getElementById("addExpensesPrompt");
        addExpenses.style.display = "flex";
    };

    return (
        <>
            <Navbar />
            <div className={styles.expensesContainer}>
                <div
                    id="addExpensesPrompt"
                    className={styles.addExpensesPrompt}
                >
                    <form onSubmit={onSubmit}>
                        <input
                            type="text"
                            name="for_what"
                            required
                            placeholder="For what"
                            onChange={(e) => setFor_What(e.target.value)}
                        />
                        <input
                            type="number"
                            name="amount"
                            placeholder="How many?"
                            required
                            min="1"
                            value={amount || ""}
                            onChange={(e) =>
                                setAmount(Math.abs(e.target.value))
                            }
                        />
                        <input
                            type="number"
                            name="price"
                            required
                            placeholder="Price"
                            value={price || ""}
                            onChange={(e) => setPrice(Math.abs(e.target.value))}
                        />

                        <input type="submit" value="+" />
                    </form>
                </div>
                <div className={styles.expensesBox}>
                    {expenses.map((item) => (
                        <div className={styles.expensesField}>
                            <div className={styles.for_what}>
                                {item.for_what}
                            </div>
                            <div className={styles.amount}>{item.amount}</div>
                            <div className={styles.price}>{item.price}</div>
                        </div>
                    ))}
                    <div className={styles.btnBox}>
                        <button
                            className={styles.addBtn}
                            onClick={showExpenses}
                        >
                            +
                        </button>
                        <button className={styles.nextBtn}>></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Expenses;
