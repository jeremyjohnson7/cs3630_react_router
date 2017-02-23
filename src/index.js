import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// eslint-disable-next-line
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Home from './modules/Home';
import About from './modules/About';
import Repos from './modules/Repos';
import Test from './modules/Test';
// import Clock from './modules/Clock';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/repos" component={Repos} />
            <Route path="/about" component={About} />
            <Route path="/test" component={Test} />
            <IndexRoute component={Home} />
        </Route>
    </Router>,
    document.getElementById('root')
);
