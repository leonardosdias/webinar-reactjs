import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddContact from "./pages/AddContact";
import Modal from "./components/Modal";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/modal" component={Modal} />
            <Route path="/add" component={AddContact} />
        </Switch>
    </BrowserRouter>
);

export default Routes;