import React from "react";
import "../styles/QuoteBox.css";
import Logo from "./Logo";

const colors = [
  "IndianRed",
  "CornflowerBlue",
  "Orange",
  "PaleGreen",
  "burlywood",
  "PaleVioletRed",
  "LightSalmon",
  "OrangeRed",
  "Gold",
  "PaleGoldenrod",
  "DarkKhaki",
  "Thistle",
  "YellowGreen",
  "PaleTurquoise",
  "LightSteelBlue",
  "Cornsilk",
  "Goldenrod",
  "LightGray",
];

const QuoteBox = ({ changeQuote, quote, author }) => {
  const randomColor = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${colors[randomColor]}`;
  return (
    <div className="main-container">
      <Logo
        randomColor={randomColor}
        colors={colors}
        delivery="First delivery"
      />
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
        <button
          onClick={changeQuote}
          style={{ background: colors[randomColor] }}
        >
          <i class="fa-solid fa-shuffle"></i>
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
