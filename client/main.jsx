import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// Import components
import App from "../imports/ui/app.jsx";
import About from "../imports/ui/about.jsx";
import Home from "../imports/ui/home.jsx";


Meteor.startup(() => {

    const appContainer = document.getElementById("app");

    render((
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="/about" component={About} />
            </Route>
        </Router>
    ), appContainer)

});