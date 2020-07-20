import axios from "axios";

const url = "http://localhost:8080/api";

export const loginUser = async (email, password) => {
    try {
        let res = await axios.post(`${url}/login`, { email, password });
        const token = res.headers["auth-token"];
        localStorage.setItem("auth-token", token);
        localStorage.setItem("email", email);
    } catch (error) {
        console.log(error);
    }
};

export const logoutUser = async () => {
    localStorage.removeItem("auth-token");
    localStorage.removeItem("email");
};

export const registerUser = async (email, name, password) => {
    try {
        axios
            .post(`${url}/register`, {
                email,
                name,
                password,
            })
            .then((res) => {
                res.status(200);
            });
    } catch (error) {
        console.log(error);
    }
};

export const fetchDashboardFields = async (email) => {
    const res = await axios.post(`${url}/dashboard`, { email });
    return res;
};

export const addIncome = async (client, amount, product, price, email) => {
    try {
        axios
            .post(`${url}/add-income`, {
                client,
                amount,
                product,
                price,
                email,
            })
            .then((res) => {
                res.status(200);
            });
    } catch (error) {
        console.log(error);
    }
};

export const addExpense = async (for_what, amount, price, email) => {
    try {
        axios
            .post(`${url}/add-expense`, {
                for_what,
                amount,
                price,
                email,
            })
            .then((res) => {
                res.status(200);
            });
    } catch (error) {
        console.log(error);
    }
};
