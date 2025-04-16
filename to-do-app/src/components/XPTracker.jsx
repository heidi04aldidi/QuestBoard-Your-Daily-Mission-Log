import React from "react";

export const XPTracker = ({ xp }) => {
  const level = Math.floor(xp / 100) + 1;
  const progress = xp % 100;

  return (
    <div className="xp-tracker">
      <p>Level: {level}</p>
      <div className="xp-bar">
        <div className="xp-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <p>{progress} / 100 XP</p>
    </div>
  );
};