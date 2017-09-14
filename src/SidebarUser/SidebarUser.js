import React, { Component } from 'react';
import './SidebarUser.css';

class SidebarUser extends Component {
  render() {
    return (
      <div className="SidebarUser">
        <div className="avatar">
		  <div className="avatar-image"></div>
	    </div>
	    <div className="username">
	    	Lurker
		</div>
		<div className="auth-button">
			<i className="glyphicon glyphicon-log-in"></i>
		</div>
      </div>
    );
  }
}

export default SidebarUser;
