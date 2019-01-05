import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Card from './Components/card'
import Dashboard from './Container/Dashboard'
import Details from './Components/Details/Details'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" exact component={Dashboard} />
            <Route path="/card" exact component={Details} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
