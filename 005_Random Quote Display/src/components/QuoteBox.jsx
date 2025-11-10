import React from 'react';
import './QuoteBox.css';

const QuoteBox = ({ quote, onRefresh }) => {
  return (
    <div className="quote-box">
      <p className="quote-text">“{quote.text}”</p>
      <p className="quote-author">— {quote.author}</p>
      <button className="refresh-btn" onClick={onRefresh}>New Quote</button>
    </div>
  );
};

export default QuoteBox;
