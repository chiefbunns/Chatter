import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../css/Navbar.css';
import Edit from '../svgs/edit.svg';

import cLogo from '../svgs/c-logo.svg';
import userIcon from '../svgs/user-icon.svg';

class Navbar extends Component {


  render() {
    return (
      <header className="app-header">
        <Link to="/"><img className="c-logo-header" src={cLogo} alt="C Logo" /></Link>
        {this.props.location.pathname === "/profile" ?
          <img className="user-icon-header" src={Edit} alt="User Icon" /> :
          <Link to="/profile"><img className="user-icon-header" src={userIcon} alt="User Icon" /></Link>
        }
      </header>
    )
  }
}

export default withRouter(Navbar);