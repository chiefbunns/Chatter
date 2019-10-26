import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../css/Navbar.css';
import Edit from '../svgs/edit.svg';
import cLogo from '../svgs/c-logo.svg';
import userIcon from '../svgs/user-icon.svg';
// import save from '../svgs/save.svg'

class Navbar extends Component {


  render() {
    return (
      <header className="app-header">
        <Link to="/"><img className="c-logo-header" src={cLogo} alt="C Logo" title="Chatter Home" /></Link>
        {this.props.location.pathname === "/profile" ?
          <Link to="/profile-edit"><img className="user-icon-header" src={Edit} alt="Edit Icon" title="Edit Profile"/></Link> :
          <Link to="/profile"><img className="user-icon-header" src={userIcon} alt="User Icon" title="Profile"/></Link>
        
        }
      </header>
    )
  }
}

export default withRouter(Navbar);