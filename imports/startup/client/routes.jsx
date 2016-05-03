import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// components
import App from "../../../imports/ui/app.jsx";
import About from "../../../imports/ui/about.jsx";
import Home from "../../../imports/ui/home.jsx";

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/about" component={About} />
        </Route>
    </Router>
);