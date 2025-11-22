import { useState, useEffect } from 'react'

export const useChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! Welcome to our live chat. How can I help you today?",
      sender: "bot",
      timestamp: new Date(Date.now() - 60000)
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const sendMessage = (text) => {
    if (!text.trim()) return

    const newMessage = {
      id: Date.now(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, newMessage])
    setInputMessage('')
    
    // Simulate bot response
    simulateBotResponse(text.trim())
  }

  const simulateBotResponse = (userMessage) => {
    setIsTyping(true)
    
    setTimeout(() => {
      const responses = [
        "I understand. Can you tell me more about that?",
        "Thanks for sharing! How can I assist you further?",
        "That's interesting! What would you like to know?",
        "I see. Is there anything specific you need help with?",
        "Great question! Let me help you with that."
      ]
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      
      const botMessage = {
        id: Date.now() + 1,
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 2000)
  }

  return {
    messages,
    inputMessage,
    setInputMessage,
    sendMessage,
    isTyping
  }
}