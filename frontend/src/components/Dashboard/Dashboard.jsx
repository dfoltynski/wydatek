import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import CountUp from "react-countup";

import styles from "./Dashboard.module.css";
import Navbar from "../Navbar/Navbar";
import { fetchDashboardFields } from "../../API";

const Dashboard = () => {
    const [balance, setBalance] = useState(0);
    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState(0);

    const data = {
        labels: ["Balance", "Income", "Expenses"],

        datasets: [
            {
                backgroundColor: [
                    "rgb(255, 51, 120)",
                    "rgb(51, 201, 255)",
                    "rgb(61, 237, 70)",
                ],

                data: [balance, income, expenses],
            },
        ],
    };

    useEffect(() => {
        const fetchDashboard = async () => {
            const email = localStorage.getItem("email");

            const res = await fetchDashboardFields(email);

            if (!(res.data.info === null)) {
                let incomeHolder = res.data.info.income.length
                    ? res.data.info.income.map(
                          (amount) => amount.price * amount.amount
                      )
                    : 0;
                let expensesHolder = res.data.info.expenses.length
                    ? res.data.info.expenses.map(
                          (expenses) => expenses.price * expenses.amount
                      )
                    : 0;

                let income = incomeHolder.length
                    ? incomeHolder.reduce((prev, curr) => {
                          return parseInt(prev) + parseInt(curr);
                      })
                    : 0;
                let expenses = expensesHolder.length
                    ? expensesHolder.reduce((prev, curr) => {
                          return parseInt(prev) + parseInt(curr);
                      })
                    : 0;

                setBalance(income - expenses);
                setIncome(income);
                setExpenses(expenses);
            }
        };
        fetchDashboard();
    }, []);

    return (
        <>
            <Navbar />
            <div className={styles.dashboardContainer}>
                <div className={styles.balanceGraph}>
                    <Doughnut
                        options={{ responsive: true }}
                        data={data ? data : [0, 0, 0]}
                    />
                </div>
                <div className={styles.balance}>
                    <div className={styles.displayMoney}>
                        <span style={{ fontSize: "1rem" }}>Balance</span>
                        <span style={{ fontSize: "1.8rem" }}>
                            {" "}
                            <CountUp start={0} end={balance} suffix=" zł" />
                        </span>
                    </div>
                </div>
                <div className={styles.income}>
                    <div className={styles.displayMoney}>
                        <span style={{ fontSize: "1rem" }}>Income</span>
                        <span style={{ fontSize: "1.8rem" }}>
                            <CountUp start={0} end={income} suffix=" zł" />
                        </span>
                    </div>
                </div>
                <div className={styles.expenses}>
                    <div className={styles.displayMoney}>
                        <span style={{ fontSize: "1rem" }}>Expenses</span>
                        <span style={{ fontSize: "1.8rem" }}>
                            <CountUp start={0} end={expenses} suffix=" zł" />
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
