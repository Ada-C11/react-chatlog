import React  from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import Chatlog from './components/Chatlog'

const App = () => {
  console.log(chatMessages);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Chat between Blah and Blah</h1>
      </header>
      <main className="App-main">
        <Chatlog messages={chatMessages} />
      </main>
    </div>
  );
};

export default App;
