import React, {Component }from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
      </div>
    )
  }

}

export default App;
