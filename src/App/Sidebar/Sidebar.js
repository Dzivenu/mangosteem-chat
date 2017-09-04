import React, { Component } from 'react';
import './Sidebar.css';
import UserAccount from './UserAccount/UserAccount';
import ChannelLists from './ChannelLists/ChannelLists';
import Footer from './Footer/Footer';

class Sidebar extends Component {
  render() {
    return (
      <aside className="Sidebar">
        <UserAccount/>
        <ChannelLists/>
        <Footer/>
      </aside>
    );
  }
}

export default Sidebar;
