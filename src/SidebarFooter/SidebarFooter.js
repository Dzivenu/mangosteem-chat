import React, { Component } from 'react';
import './SidebarFooter.css';

class SidebarFooter extends Component {
  render() {
    return (
      <div className="SidebarFooter">
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

export default SidebarFooter;
