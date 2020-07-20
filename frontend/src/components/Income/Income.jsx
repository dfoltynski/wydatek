import React, { useState, useEffect } from "react";

import { addIncome, fetchDashboardFields } from "../../API";
import styles from "./Income.module.css";
import Navbar from "../Navbar/Navbar";

const Income = () => {
    const [amount, setAmount] = useState(0);
    const [price, setPrice] = useState(0);
    const [product, setProduct] = useState("");
    const [client, setClient] = useState("");

    const [income, setIncome] = useState([]);

    useEffect(() => {
        const fetchDashboard = async () => {
            const email = localStorage.getItem("email");
            const res = await fetchDashboardFields(email);
            if (!(res.data.info === null)) {
                setIncome(res.data.info.income);
            }
        };
        fetchDashboard();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();

        addIncome(
            client,
            amount,
            product,
            price,
            localStorage.getItem("email")
        ).then(() => {
            let addIncomePrompt = document.getElementById("addIncomePrompt");
            addIncomePrompt.style.display = "none";
            window.location.reload();
        });
    };

    const showIncome = (e) => {
        e.preventDefault();
        let addIncome = document.getElementById("addIncomePrompt");
        addIncome.style.display = "flex";
    };

    return (
        <>
            <Navbar />
            <div className={styles.incomeContainer}>
                <div id="addIncomePrompt" className={styles.addIncomePrompt}>
                    <form onSubmit={onSubmit}>
                        <input
                            type="text"
                            name="from"
                            required
                            placeholder="Income from"
                            onChange={(e) => setClient(e.target.value)}
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
                        <input
                            type="text"
                            name="product"
                            required
                            placeholder="Product"
                            onChange={(e) => setProduct(e.target.value)}
                        />
                        <input type="submit" value="+" />
                    </form>
                </div>
                <div className={styles.incomeBox}>
                    {income.map((item) => (
                        <div className={styles.incomeField}>
                            <div className={styles.from}>{item.from}</div>
                            <div className={styles.amount}>{item.amount}</div>
                            <div className={styles.price}>{item.price}</div>
                            <div className={styles.product}>{item.product}</div>
                        </div>
                    ))}
                    <div className={styles.btnBox}>
                        <button className={styles.addBtn} onClick={showIncome}>
                            +
                        </button>
                        <button className={styles.nextBtn}>></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Income;
