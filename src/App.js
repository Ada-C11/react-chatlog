import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatContainer from './components/ChatContainer';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Application title</h1>
      </header>
      <main className="App-main" />
      <ChatContainer messages={chatMessages} />
    </div>
  );
};

export default App;
