// src/Chat.js
import React, { useState, useEffect } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import './Chat.css'

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = () => {
        if (input.trim() !== '') {
            setMessages([...messages, { text: input, timestamp: new Date() }]);
            setInput('');
        }
    };

    return (
        <div className="chat-container">
            <ScrollToBottom className="chat-messages">
                {messages.map((message, index) => (
                    <div key={index} className="message">
                        <p>{message.text}</p>
                        <span>{message.timestamp.toLocaleTimeString()}</span>
                    </div>
                ))}
            </ScrollToBottom>

            <div className="input-container">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
