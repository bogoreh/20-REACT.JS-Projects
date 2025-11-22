import React from 'react'
import { useChat } from '../../hooks/useChat'
import MessageList from './MessageList'
import MessageInput from './MessageInput'

const ChatContainer = () => {
  const {
    messages,
    inputMessage,
    setInputMessage,
    sendMessage,
    isTyping
  } = useChat()

  return (
    <div className="chat-container">
      <div className="chat-window">
        <MessageList messages={messages} isTyping={isTyping} />
        <MessageInput
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  )
}

export default ChatContainer