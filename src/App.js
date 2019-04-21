import React, { Component } from 'react';
import './App.css';

import { HashRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Header from './components/Header'
import YourCart from './components/YourCart';
import CheckOut from './components/CheckOut';
import OrderComplete from './components/OrderComplete';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route path='/' component={YourCart} exact />
            <Route path='/CheckOut' component={CheckOut} exact />
            <Route path='/OrderComplete' component={OrderComplete} exact />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
