import React from "react";

export const QuestItem = ({ quest, toggleQuest, deleteQuest }) => {
  return (
    <div className={`quest-item ${quest.completed ? "completed" : ""}`}>
      <span onClick={() => toggleQuest(quest.id)} className="quest-text">
        {quest.text}
      </span>
      <button onClick={() => deleteQuest(quest.id)} className="delete-button">🗑️</button>
    </div>
  );
};