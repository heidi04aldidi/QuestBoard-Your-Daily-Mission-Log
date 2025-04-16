import React from "react";
import { QuestItem } from "./QuestItem";

export const QuestList = ({ quests, toggleQuest, deleteQuest }) => {
  return (
    <div className="quest-list">
      {quests.map((quest) => (
        <QuestItem
          key={quest.id}
          quest={quest}
          toggleQuest={toggleQuest}
          deleteQuest={deleteQuest}
        />
      ))}
    </div>
  );
};