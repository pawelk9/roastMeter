import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { Router, Route, browserHistory } from 'react-router'

import App from "../imports/ui/app.jsx";
import About from "../imports/ui/about.jsx";

Meteor.startup(() => {

    render((
        <Router history={browserHistory}>
            <Route path="/" component={App}/>
            <Route path="/about" component={About}/>
        </Router>
    ), document.getElementById('app'))
});