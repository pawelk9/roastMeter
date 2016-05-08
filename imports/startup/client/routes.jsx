import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// components
import App from "../../../imports/ui/app.jsx";
import About from "../../../imports/ui/about.jsx";
import Prompt from "../../ui/prompt.jsx";
import Roast from "../../ui/roast.jsx";

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Prompt} />
            <Route path="/roast" component={Roast} />
            <Route path="/about" component={About} />
        </Route>
    </Router>
);
