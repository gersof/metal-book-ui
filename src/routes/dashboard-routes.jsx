import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import CreateBandPage from "../pages/bands/create-band/create-band";
import HomePage from "../pages/home-page";

export default function DashboardRoutes() {
    const  path = '/pages';

    return (
        <Router>
            <Switch>
                <Route exact path={`${path}/home`}>
                    <HomePage />
                </Route>
                <Route exact path={`${path}/band/new-band`}>
                    <CreateBandPage />
                </Route>                
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    );
}

