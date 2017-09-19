import React, { Component } from 'react';
import './Chat.css';
import ChatHeader from '../ChatHeader/ChatHeader';
import ChatInput from '../ChatInput/ChatInput';
import ChatSidebar from '../ChatSidebar/ChatSidebar';

class Chat extends Component {
  render() {
    return (
      <div className="Chat">
      	<div className="content-container">
      	  <ChatHeader/>
      	  <ChatInput/>
      	</div>
        <ChatSidebar/>
      </div>
    );
  }
}

export default Chat;
