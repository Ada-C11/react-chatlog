import React from 'react';
import './App.css';
import Chatlog from './components/Chatlog';
import chatMessages from './data/messages.json';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Chat between Vladimir and Estragon</h1>
      </header>
      <main className="App-main">
        <Chatlog messages={ chatMessages } />
      </main>
    </div>
  );
};

export default App;
