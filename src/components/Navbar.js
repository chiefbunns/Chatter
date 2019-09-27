import React, { Component } from 'react';
import '../App.css';
//import axios from 'axios';

import cLogo from '../svgs/c-logo.svg';
import userIcon from '../svgs/user-icon.svg';

class Navbar extends Component {
    render() {
        return (
          <header className="app-header">
          <img src={cLogo} alt="C Logo" />
          <img src={userIcon} alt="User Icon" />
          </header>
        )
    }
}

  export default Navbar;