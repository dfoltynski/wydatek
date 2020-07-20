import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import authToken from "./components/authToken";
import { Dashboard, Login, Income, Expenses, Register } from "./components";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route
                    exact
                    path="/dashboard"
                    component={authToken(Dashboard)}
                />
                <Route exact path="/income" component={authToken(Income)} />
                <Route exact path="/expenses" component={authToken(Expenses)} />
            </Switch>
        </div>
    );
}

export default App;
