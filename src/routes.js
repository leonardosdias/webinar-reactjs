import React from "react";

import { Switch, Route } from "react-router-dom";

import Contacts from "./pages/Contacts";
import AddContact from "./pages/AddContact";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Contacts} />
        <Route path="/add" component={AddContact} />
    </Switch>
);

export default Routes;