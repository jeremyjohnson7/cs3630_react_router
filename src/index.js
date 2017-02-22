import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Router, Route, hashHistory, browserHistory } from 'react-router';
import About from './modules/About';
import Repos from './modules/Repos';

ReactDOM.render(
    // <App />
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        {/* add the routes here */}
        <Route path="/repos" component={Repos} />
        <Route path="/about" component={About} />
    </Router>,
    document.getElementById('root')
);
