import React, { useState } from "react";
import { Link } from "react-router-dom";

import { logoutUser } from "../../API";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const [activate, setActivate] = useState(true);

    const logout = async (e) => {
        e.preventDefault();
        await logoutUser();
        window.location.reload();
    };

    return (
        <div className={styles.navbarContainer}>
            <button
                id="hamburger"
                className={
                    activate ? styles.hamburger : styles.hamburger__activate
                }
                onClick={() => setActivate(!activate)}
            >
                <span className={styles.hamburger__box}>
                    <span className={styles.hamburger__inner}></span>
                </span>
            </button>
            <div className={activate ? styles.menu : styles.menu__activate}>
                <div className={styles.menu__items}>
                    <ul>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/income">Income</Link>
                        </li>
                        <li>
                            <Link to="/expenses">Expenses</Link>
                        </li>
                        <li>
                            <button onClick={logout}>Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
