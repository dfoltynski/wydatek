import React from "react";
import { Redirect } from "react-router-dom";

import axios from "axios";

export default function authToken(ProtectedComponent) {
    return class extends React.Component {
        constructor() {
            super();

            this.state = {
                token: localStorage.getItem("auth-token"),
                redirect: true,
            };
        }

        async auth() {
            const { token } = this.state;
            axios
                .get("http://localhost:8080/api/auth-token", {
                    headers: {
                        "auth-token": token,
                    },
                })
                .then((response) => {
                    if (response.status === 200) {
                    } else {
                        this.setState({ redirect: false });
                        localStorage.removeItem("auth-token");
                        localStorage.removeItem("email");
                        const error = new Error(response.error);
                        throw error;
                    }
                })
                .catch((err) => {
                    this.setState({ redirect: false });

                    localStorage.removeItem("auth-token");
                    localStorage.removeItem("email");

                    console.log(err);
                });
        }

        componentDidMount() {
            this.auth();
        }

        render() {
            const { redirect } = this.state;
            if (!redirect) {
                return <Redirect to="/" />;
            }
            return <ProtectedComponent />;
        }
    };
}
