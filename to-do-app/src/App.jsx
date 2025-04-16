import React, { useState, useEffect } from "react";
import { QuestForm } from "./components/QuestForm";
import { QuestList } from "./components/QuestList";
import { XPTracker } from "./components/XPTracker";
import "./styles/App.css";

function App() {
  const [quests, setQuests] = useState(() => {
    const saved = localStorage.getItem("quests");
    return saved ? JSON.parse(saved) : [];
  });
  const [xp, setXp] = useState(() => {
    const saved = localStorage.getItem("xp");
    return saved ? JSON.parse(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem("quests", JSON.stringify(quests));
    localStorage.setItem("xp", JSON.stringify(xp));
  }, [quests, xp]);

  const addQuest = (text) => {
    const newQuest = {
      id: Date.now(),
      text,
      completed: false,
    };
    setQuests([newQuest, ...quests]);
  };

  const toggleQuest = (id) => {
    setQuests(
      quests.map((q) => {
        if (q.id === id && !q.completed) {
          setXp(xp + 10);
        }
        return q.id === id ? { ...q, completed: !q.completed } : q;
      })
    );
  };

  const deleteQuest = (id) => {
    setQuests(quests.filter((q) => q.id !== id));
  };

  return (
    <div className="app-container">
      <h1 className="title">🎮 QuestBoard</h1>
      <XPTracker xp={xp} />
      <QuestForm addQuest={addQuest} />
      <QuestList
        quests={quests}
        toggleQuest={toggleQuest}
        deleteQuest={deleteQuest}
      />
    </div>
  );
}

export default App;