import React from "react";
import "../styles/QuoteBox.css";

const colors = ["red", "blue", "yellow", "green"];

const QuoteBox = ({ changeQuote, quote, author }) => {
  const randomColor = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${colors[randomColor]}`;
  return (
    <div className="quoteBox" style={{ color: colors[randomColor] }}>
      <div className="container">
        <span>
          <i class="fa-solid fa-quote-left"></i>
        </span>
        <div>
          <p className="quote-text">{quote}</p>
          <p className="author-text">{author}</p>
        </div>
      </div>
      <button onClick={changeQuote} style={{ background: colors[randomColor] }}>
        <i class="fa-solid fa-shuffle"></i>
      </button>
    </div>
  );
};

export default QuoteBox;
