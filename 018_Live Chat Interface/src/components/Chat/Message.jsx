import React from 'react'
import { formatTime } from '../../utils/helpers'

const Message = ({ message }) => {
  const isUser = message.sender === 'user'
  
  return (
    <div className={`message ${isUser ? 'message-user' : 'message-other'}`}>
      <div className="message-content">
        <div className="message-text">{message.text}</div>
        <div className="message-time">{formatTime(message.timestamp)}</div>
      </div>
      <div className="message-avatar">
        {isUser ? '👤' : '🤖'}
      </div>
    </div>
  )
}

export default Message