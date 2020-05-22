import React from 'react';

import { Switch, Route } from "react-router-dom";

import Home from "../../pages/Home";
import AddContact from "../../pages/AddContact";
import Welcome from '../../pages/Welcome';
import NotFound from '../../pages/NotFound';

function Content() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/add" component={AddContact} />
                <Route path="/search-contact" component={Home} />
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    )
}

export default Content;