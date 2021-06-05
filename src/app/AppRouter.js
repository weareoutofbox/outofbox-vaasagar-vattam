/** @format */

// import external modules
import React, { lazy } from "react";
import { Router, Route, Switch } from "react-router-dom";
const createBrowserHistory = require("history").createBrowserHistory;

const LazyLogin = lazy(() => import("../views/loginScreen/login"));

const LazyHome = lazy(() => import("../views/homePage"));

export const history = createBrowserHistory({
  basename: "/",
});

class AppRouter extends React.Component {
  componentDidMount = async () => {};
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route path='/login' component={LazyLogin} exact={true} />
            <Route
              path='/home'
              component={LazyHome}
              exact={true}
              fulllayout={false}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppRouter;
