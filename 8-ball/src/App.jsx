import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling

// Define a list of possible answers
const answers = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];

const Magic8Ball = ({ onShake }) => {
  const handleClick = () => {
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    onShake(randomAnswer);
  };

  return (
    <div className="magic-8-ball" onClick={handleClick}>
      <button>Think of a question</button>
    </div>
  );
};

const App = () => {
  const [answer, setAnswer] = useState(null);

  const handleShake = (randomAnswer) => {
    setAnswer(randomAnswer);
  };

  return (
    <div className="app">
      <h1>Magic 8-Ball</h1>
      <div className="magic-8-ball-container">
        <Magic8Ball onShake={handleShake} />
        {answer && (
          <div className="answer-circle" style={{ backgroundColor: answer.color }}>
            <p>{answer.msg}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
