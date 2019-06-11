import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  console.log(chatMessages);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">React Chat Log</h1>
      </header>
      <main className="App-main">
        <ChatLog chatMessages={chatMessages}/>
      </main>
    </div>
  );
};

export default App;
