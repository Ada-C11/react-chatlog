import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatBubble from './components/ChatBubble';


const test = {
  "sender":"Vladimir",
  "body":"why are you arguing with me",
  "timeStamp":"2018-05-29T22:49:06+00:00"
};

const App = () => {
  console.log(chatMessages);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Chat Between Yackety and Smackety</h1>
      </header>
      <main className="App-main">
        <ChatBubble sender={test.sender} body={test.body} timestamp={test.timeStamp} />
      </main>
    </div>
  );
};

export default App;
