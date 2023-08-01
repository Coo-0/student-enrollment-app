// components/ChatbotMessage.js
import React from 'react';

const ChatbotMessage = ({ type, text }) => {
  return (
    <div className={`message ${type === 'bot' ? 'bot' : 'user'}`}>
      <span>{text}</span>
    </div>
  );
};

export default ChatbotMessage;
