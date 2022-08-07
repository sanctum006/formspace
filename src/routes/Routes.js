import { Route, BrowserRouter, Switch } from "react-router-dom";
import FormContainer from "../pages/FormContainer";

const Routes = () => {
  return (
    <BrowserRouter>
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
          <FormContainer />
        </Route>
        <Route exact path="/forms/preview">
          <h1>Home</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
