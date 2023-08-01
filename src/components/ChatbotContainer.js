import React, { useState } from 'react'; // Import the useState hook

const ChatbotContainer = () => {
  const dispatch = useDispatch();
  const { name, age } = useSelector((state) => state);
  const [messages, setMessages] = useState([]); // Use the useState hook for managing state
  // Rest of the code for the chatbot logic
};

export default ChatbotContainer;
