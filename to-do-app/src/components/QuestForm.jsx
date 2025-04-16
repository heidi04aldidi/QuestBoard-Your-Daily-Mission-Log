import React, { useState } from "react";

export const QuestForm = ({ addQuest }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addQuest(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="quest-form">
      <input
        type="text"
        placeholder="Enter a new quest..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="quest-input"
      />
      <button type="submit" className="quest-button">Add</button>
    </form>
  );
};