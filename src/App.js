import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Link } from 'react-router';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-navbar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/repos">Repos</Link></li>
                        <li><Link to="/test">Test</Link></li>
                    </ul>
                </div>

                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>

                {this.props.children}
            </div>
        );
    }
}

export default App;
