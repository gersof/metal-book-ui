import React from "react";
import LoginPage from "./pages/login-page";
import MainDashboard from './common/components/main-dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";;
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route  path={`/pages`}>
            <MainDashboard />
          </Route>
          <Route exact path={`/login`}>
            <LoginPage />
          </Route>
          <Route exact path={`/`}>
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
