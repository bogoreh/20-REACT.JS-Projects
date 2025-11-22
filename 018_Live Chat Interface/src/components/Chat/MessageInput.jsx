import React from 'react'
import { Send } from 'lucide-react'

const MessageInput = ({ inputMessage, setInputMessage, sendMessage }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputMessage.trim()) {
      sendMessage(inputMessage)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <form className="message-input-container" onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
          className="message-input"
        />
        <button 
          type="submit" 
          className="send-button"
          disabled={!inputMessage.trim()}
        >
          <Send size={20} />
        </button>
      </div>
    </form>
  )
}

export default MessageInput