import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatContainer from './components/ChatContainer';

const App = () => {
  const names = [];
  chatMessages.forEach(object => {
    if (!names.includes(object.sender)) {
      names.push(object.sender);
    }
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">
          Chat Between {names[0]} and {names[1]}
        </h1>
      </header>
      <main className="App-main" />
      <ChatContainer messages={chatMessages} />
    </div>
  );
};

export default App;
