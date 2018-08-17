import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Create from './Create';
import Frontpage from './Frontpage';

import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path='/create' exact component={Create} />
          <Route path='/' exact component={Frontpage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
