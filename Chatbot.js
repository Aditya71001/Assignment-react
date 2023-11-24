import React, { useState, useEffect } from 'react';

const Chatbot = ({ onGotIt, showCalendar, showTimeSlot }) => {
  const [botMessages, setBotMessages] = useState([
    'Hello, Welcome to student info system!',
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBotMessages([...botMessages, '...']);
    }, 3000);

    return () => clearTimeout(timer);
  }, [botMessages]);

  const handleGotIt = () => {
    setBotMessages([...botMessages, 'User: Got it!']);
    onGotIt();
  };

  return (
    <div className="chatbot">
      {botMessages.map((message, index) => (
        <div key={index}>
          <p>Bot: {message}</p>
        </div>
      ))}
      {!showCalendar && (
        <button onClick={handleGotIt}>Got it!</button>
      )}
    </div>
  );
};

export default Chatbot;
