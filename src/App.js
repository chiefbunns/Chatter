import React, { Component } from 'react';
import axios from 'axios'
import { Route, Switch } from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import ProfileEdit from './pages/Profile-edit'
import Navbar from './components/Navbar';

class App extends Component {

  componentDidMount() {
    axios.get('http://localhost:8080/comments')
      .then(response => {
        console.log("Logged", response)
      })
      .catch(error => console.log(error))
  }
  render() {
    // onClick={() => {
    //   axios.get('http://localhost:8080/comments')
    //     .then((res) => {
    //       console.log(res)
    //     })
    //     .catch((err) => console.log(err));
    // }}
    return (
      <div className="app" >
        <Navbar />
        <Switch>
          <Route exact path="/index.html" component={Home} />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/profile-edit" component={ProfileEdit} />
        </Switch>
      </div>
    )
  }
}

export default App;
