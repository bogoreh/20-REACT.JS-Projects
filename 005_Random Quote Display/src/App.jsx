import React, { useState } from 'react';
import QuoteBox from './components/QuoteBox';
import quotes from './data/quotes';
import './App.css';

const getRandomQuote = () => {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
};

function App() {
  const [quote, setQuote] = useState(getRandomQuote());

  const handleRefresh = () => {
    setQuote(getRandomQuote());
  };

  return (
    <div className="app-container">
      <h1 className="title">Inspire Me ✨</h1>
      <QuoteBox quote={quote} onRefresh={handleRefresh} />
    </div>
  );
}

export default App;
