import React, { Component } from 'react';
import './App.css';
import Sidebar from '../Sidebar/Sidebar';
import Chat from '../Chat/Chat';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar/>
        <Chat/>
      </div>
    );
  }
}

export default App;
