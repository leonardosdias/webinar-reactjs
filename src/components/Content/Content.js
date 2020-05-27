import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Welcome from '../../pages/Welcome';
import AddContact from '../../pages/AddContact';
import Contacts from '../../pages/Contacts';
import NotFound from '../../pages/NotFound';

function Content() {
    return (
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/add" component={AddContact} />
            <Route path="/contacts" component={Contacts} />
            <Route path="*" component={NotFound} />
        </Switch>
    )
}

export default Content;