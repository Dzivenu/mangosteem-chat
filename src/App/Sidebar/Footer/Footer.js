import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="logo">
          <img src="./images/logo.png" alt="Mangosteem logo"/>
        </div>
        <div className="branding">
          <p className="app-name">Mangosteem</p>
          <p className="slogan">Steem Powered Web Chat</p>
        </div>
      </div>
    );
  }
}

export default Footer;
