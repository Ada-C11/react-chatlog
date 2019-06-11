import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';

import Message from './components/Message';

const App = () => {
  console.log(chatMessages);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Chat Between {chatMessages[0]["sender"]} and {chatMessages[1]["sender"]}</h1>
      </header>
      <main className="App-main">
        <Message />
      </main>
    </div>
  );
};

export default App;
