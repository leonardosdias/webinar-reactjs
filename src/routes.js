import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddContact from "./pages/AddContact";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={AddContact} />
    </Switch>
);

export default Routes;