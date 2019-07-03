import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Displayer from './displayer/Displayer';
import Controller from './controller/Controller';

function Routing() {
    return (
        <Router>
            <Route exact path='/display' component={Displayer} />
            <Route exact path='/control' component={Controller} />
        </Router>
    )
}

export default Routing;