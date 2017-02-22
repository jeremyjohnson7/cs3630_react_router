import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {Router, Route, hashHistory} from 'react-router';
import About from './modules/About';
import Repos from './modules/Repos';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <Router history={hashHistory}>
                    <Route path="/" component={App}/>
                    {/* add the routes here */}
                    <Route path="/repos" component={Repos}/>
                    <Route path="/about" component={About}/>
                </Router>
            </div>
        );
    }
}

export default App;
