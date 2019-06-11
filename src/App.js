import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  console.log(chatMessages);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">It's the End of the World as We Know It</h1>
      </header>
      <main className="App-main">
        <section className="chat-log">
          <ChatLog messages={ chatMessages } />
        </section>
      </main>
    </div>
  );
};

export default App;
