import React, { useEffect, useRef } from 'react'
import Message from './Message'

const MessageList = ({ messages, isTyping }) => {
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div className="message-list">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      
      {isTyping && (
        <div className="typing-indicator">
          <div className="typing-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="typing-text">Someone is typing...</span>
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  )
}

export default MessageList