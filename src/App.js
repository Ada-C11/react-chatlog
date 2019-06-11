import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import Log from './components/Log';

const App = () => {
  const header = () => {
    const [remote, local] = senders();

    return `Chat between ${remote} and ${local}`;
  };

  const senders = () => {
    const senders = chatMessages.map(msg => msg.sender);
    const allSenders = new Set(senders);

    return [...allSenders];
  };
  console.log(chatMessages);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">{header()}</h1>
      </header>
      <main className="App-main">
        <Log messages={chatMessages} />
      </main>
    </div>
  );
};

export default App;
