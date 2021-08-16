import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../views/Home";
import Dashboard from "../views/Dashboard";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import Navbar from "../components/Navbar";
import * as Middleware from "../midleware/App";

function Router(props) {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="mt-4"></div>
			<Switch>
				<Route exact path="/" component={Home} />
                <Route path="/dashboard">
                    <Middleware.Authenticated render={<Dashboard />} />
                </Route>
                <Route path="/login">
                    <Middleware.Guest render={<Login />} />
                </Route>
                <Route path="/register">
                    <Middleware.Guest render={<Register />} />
                </Route>
			</Switch>
		</BrowserRouter>
	);
}

export default Router;
