import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import Header from './components/Header';


const App = () => {
  console.log(chatMessages);

  return (
    <div className="App">
      <Header messages={chatMessages} />
      <main className="App-main">
        <ChatLog messages={chatMessages} />
      </main>
    </div>
  );
};

export default App;
