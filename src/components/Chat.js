import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import './Chat.css';

const Chat = () => {
  const { communityId } = useParams(); // Get the community ID from the URL
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);
  
  // Simulate fetching members and messages based on communityId
  const communityMembers = {
    1: ['Miru', 'Harishma', 'Leo'],
    2: ['David', 'Evelyn', 'Frank'],
    3: ['Bhava', 'Simba', 'You'],
  };

  useEffect(() => {
    setMessages([
      { sender: 'System', text: 'Welcome to Community ' + communityId },
      { sender: 'Alice', text: 'Hello everyone!' }
    ]);
  }, [communityId]);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { sender: 'You', text: inputMessage }]);
      setInputMessage(''); // Clear the input field
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom(); // Scroll to bottom when a new message is added
  }, [messages]);

  return (
    <div className="chat-container">
      <h1 className="chat-header">Community {communityId} Chat</h1>
      <h3>Members:</h3>
      <ul>
        {communityMembers[communityId].map(member => (
          <li key={member}>{member}</li>
        ))}
      </ul>
      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className="chat-message">
            <strong>{message.sender}: </strong>
            <span>{message.text}</span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          placeholder="Type a message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button
          className="send-button"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
