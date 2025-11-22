import React from 'react'
import ChatContainer from './components/Chat/ChatContainer'
import Header from './components/Layout/Header'
import './styles/globals.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <ChatContainer />
      </main>
    </div>
  )
}

export default App