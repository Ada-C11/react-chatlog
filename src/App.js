import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  console.log(chatMessages);

  const localName = chatMessages[0].sender;
  const remoteName = chatMessages[1].sender;

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Chat between {localName} and {remoteName}</h1>
      </header>
      <main className="App-main">
        <ChatLog chatMessages={chatMessages}/>
      </main>
    </div>
  );
};

export default App;
