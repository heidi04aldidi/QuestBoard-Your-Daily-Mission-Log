import React, { useState, useEffect } from 'react';
import './App.css';
import { playSound } from './soundPlayer';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [theme, setTheme] = useState('retro'); // default theme

  useEffect(() => {
    document.body.className = theme; // Apply selected theme class to <body>
  }, [theme]);

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput('');
      playSound('add.mp3');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    playSound('delete.mp3');
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    playSound('complete.mp3');
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <div className="App">
      <h1>QuestBoard 🎮</h1>

      <select onChange={handleThemeChange} value={theme} className="theme-switcher">
        <option value="retro">🎮 Retro Arcade</option>
        <option value="cyber">💾 Cyberpunk</option>
        <option value="forest">🌲 Forest Elf</option>
      </select>

      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add your quest..."
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <span onClick={() => toggleComplete(index)} className="task-check">
              🏹
            </span>
            <span className="task-text" onClick={() => toggleComplete(index)}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;