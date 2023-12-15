import React, { useState } from "react";
import { runChat } from "./geminiconfig.js";

const Gemini = () => {
  const [inputValue, setInputValue] = useState("");
  const [reply, setReply] = useState("");

  const generateReply = async () => {
    try {
    const response = await runChat(inputValue);
    console.log("Full response:", response);
    setReply(response);

  } catch (error) {
    console.error("Error generating reply:", error.message);
  }
  };

  return (
    <div>
      <h1>Gemini</h1>
      <input
        placeholder="Input here"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="">{reply}</div>
      <button onClick={generateReply}>Generate Reply</button>
    </div>
  );
};

export default Gemini;
