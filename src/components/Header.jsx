import React from 'react';

const Header = (props) => {
  const participants = props.messages.map((message) => {
    return message.sender;
  });

  const uniqueParticipants = Array.from( new Set(participants) );

  let participantsText = uniqueParticipants[0]

  for(let i = 1; i < uniqueParticipants.length; i++) {
    participantsText += ` and ${uniqueParticipants[i]}`;
  }

  return (
    <header className="App-header">
      <h1 className="App-title">Chat between {participantsText}</h1>
    </header>
  );
};

export default Header;
