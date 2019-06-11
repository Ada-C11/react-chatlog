import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import Log from './components/Log';

const App = () => {
  console.log(chatMessages);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">A chat.</h1>
      </header>
      <main className="App-main">
        <Log messages={chatMessages} />
      </main>
    </div>
  );
};

export default App;
