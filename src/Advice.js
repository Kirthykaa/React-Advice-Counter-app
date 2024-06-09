import React from "react";
import "./Advice.css";
import { useState } from "react";
function Advice() {
  const [advice, setAdvice] = useState("Please click the get advice button");
  const [count, setcount] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setcount((c) => c + 1);
  }
  return (
    <div>
      <h6>it's keerthy here-Advice counter app</h6>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <p>
        You have read <b> {count}</b> pieces of advice
      </p>
    </div>
  );
}

export default Advice;
