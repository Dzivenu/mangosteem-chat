import React, { Component } from 'react';
import './ChatSidebar.css';

class ChatSidebar extends Component {
  render() {
    return (
      <div className="ChatSidebar">
      	<div className="button channel-info-button">
      	  <i className="glyphicon glyphicon-info-sign"></i>
      	</div>
      </div>
    );
  }
}

export default ChatSidebar;