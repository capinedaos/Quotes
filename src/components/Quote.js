import React from "react";
import { useState } from "react";
import quotes from "../quotes.json";
import QuoteBox from "./QuoteBox";

const Quote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(randomIndex);
  const changeQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setIndex(randomIndex);
  };
  return (
    <div>
      <QuoteBox
        changeQuote={changeQuote}
        quote={quotes[index].quote}
        author={quotes[index].author}
      />
    </div>
  );
};

export default Quote;
