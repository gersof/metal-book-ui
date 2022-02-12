import React from "react";
import ViewBandsPage from "../pages/bands/view-bands";
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
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path={`${path}/home`}>
                    <HomePage />
                </Route>
                <Route exact path={`${path}/band/new-band`}>
                    <CreateBandPage />
                </Route>
                <Route exact path={`${path}/bands`}>
                    <ViewBandsPage />
                </Route>                 
            </Switch>
        </Router>
    );
}

