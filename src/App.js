import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';


const App = () => {
  console.log(chatMessages);

  const message = chatMessages[0]

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Application title</h1>
      </header>
      <main className="App-main">
        <Message message={message}/>
      </main>
    </div>
  );
};

export default App;
