import React, { Component } from 'react';
// import axios from 'axios'
import { Route, Switch } from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import ProfileEdit from './pages/Profile-edit';
import withAuth from './components/withAuth';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';

class App extends Component {

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
          <Route path="/signup" component={Signup} />
          <Route path="/profile/:user_handle" component={withAuth(Profile)} />
          <Route path="/profile-edit" component={withAuth(ProfileEdit)} />
        </Switch>
      </div>
    )
  }
}

export default App;
