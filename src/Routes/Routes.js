import { Route, Router, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route exact path="/user/login">
          <h1>User Login</h1>
        </Route>
        <Route exact path="/user/register">
          <h1>User Register</h1>
        </Route>
        <Route exact path="/user/profile">
          <h1>User Profile</h1>
        </Route>
        <Route exact path="/forms">
          <h1>App </h1>
        </Route>
        <Route exact path="/forms/preview">
          <h1>Home</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
