import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatBubble from './components/ChatBubble';


const test = [
  {
    "sender":"Vladimir",
    "body":"why are you arguing with me",
    "timeStamp":"2018-05-29T22:49:06+00:00"
  },
  {
    "sender":"Estragon",
    "body":"Because you are wrong.",
    "timeStamp":"2018-05-29T22:49:33+00:00"
  },
];

const App = () => {
  console.log(chatMessages);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Chat Between Yackety and Smackety</h1>
      </header>
      <main className="App-main">
        <ChatBubble sender={test[0].sender} body={test[0].body} timestamp={test[0].timeStamp} />
        <ChatBubble sender={test[1].sender} body={test[1].body} timestamp={test[1].timeStamp} />
      </main>
    </div>
  );
};

export default App;
