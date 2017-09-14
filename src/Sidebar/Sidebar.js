import React, { Component } from 'react';
import './Sidebar.css';
import SidebarUser from '../SidebarUser/SidebarUser';
import SidebarChannelLists from '../SidebarChannelLists/SidebarChannelLists';
import SidebarFooter from '../SidebarFooter/SidebarFooter';

class Sidebar extends Component {
  render() {
    return (
      <aside className="Sidebar">
        <SidebarUser/>
        <SidebarChannelLists/>
        <SidebarFooter/>
      </aside>
    );
  }
}

export default Sidebar;
