import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateName, updateAge } from '../actions/studentActions';
import { Chatbot } from 'react-chatbot-kit';
import ChatbotMessage from './ChatbotMessage';

import { getNameSelector, getAgeSelector } from '../reducers/studentReducer';

const ChatbotComponent = () => {
  const dispatch = useDispatch();
  const name = useSelector(getNameSelector);
  const age = useSelector(getAgeSelector);
  
  const [messages, setMessages] = useState([]);
  const [nameInput, setNameInput] = useState('');
  const [ageInput, setAgeInput] = useState('');

  console.log('name:', name);
  console.log('age:', age);

  // Function to handle user clicks on "Got it!" button
  const handleGotIt = () => {
    const welcomeMessage = 'Hello, Welcome to the student info system!';
    const gotItMessage = 'User: Got it!';

    setMessages([...messages, { type: 'bot', text: welcomeMessage }, { type: 'user', text: gotItMessage }]);
  };

  // Function to handle user input for name
  const handleNameInput = (event) => {
    setNameInput(event.target.value);
  };

  // Function to handle user input for age
  const handleAgeInput = (event) => {
    setAgeInput(event.target.value);
  };

  useEffect(() => {
    // After entering age, display the countdown and redirect to page 3
    if (age) {
      const countdownMessage = `Bot: Thank you. In 5 seconds, bot will exit`;

      setMessages([...messages, { type: 'user', text: age }, { type: 'bot', text: countdownMessage }]);

      const timer = setTimeout(() => {
        // Simulate redirection to Page 3 after 5 seconds
        // Replace the `'/confirmation'` with the actual path to Page 3 in your application
        window.location.href = '/confirmation';
      }, 5000);

      // Clear the timer when the component unmounts
      return () => clearTimeout(timer);
    }
  }, [age, messages]);

  return (
    <div className="chatbot">
      <div className="chatbox">
        {/* Render chat messages */}
        {messages.map((message, index) => (
          <ChatbotMessage key={index} type={message.type} text={message.text} />
        ))}

        {/* Chatbot input */}
        <div className="chat-input">
          {/* Show Got it! button if bot message has been displayed */}
          {messages.length > 0 && messages[messages.length - 1].type === 'bot' && (
            <button onClick={handleGotIt}>Got it!</button>
          )}

          {/* Ask for name */}
          {messages.length > 1 && messages[messages.length - 2].type === 'user' && (
            <>
              <ChatbotMessage type="bot" text="Bot: Enter your Name" />
              <input type="text" onChange={handleNameInput} value={nameInput} />
            </>
          )}

          {/* Ask for age */}
          {messages.length > 3 && messages[messages.length - 4].type === 'user' && (
            <>
              <ChatbotMessage type="bot" text="Bot: Enter your Age (18-40)" />
              <select onChange={handleAgeInput} value={ageInput}>
                <option value="">Select Age</option>
                {Array.from({ length: 23 }, (_, i) => i + 18).map((ageValue) => (
                  <option key={ageValue} value={ageValue}>
                    {ageValue}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatbotComponent;
