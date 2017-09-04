import React, { Component } from 'react';
import './UserAccount.css';

class UserAccount extends Component {
  render() {
    return (
      <div className="UserAccount">
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

export default UserAccount;
