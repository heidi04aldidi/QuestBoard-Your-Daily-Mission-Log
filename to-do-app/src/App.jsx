// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { playSound } from './soundPlayer'; // Utility to play sounds

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [level, setLevel] = useState(1);

  // Level up every 5 tasks
  useEffect(() => {
    if (tasks.length && tasks.length % 5 === 0) {
      setLevel(prev => prev + 1);
      playSound('levelup.mp3');
    }
  }, [tasks]);

  // Add task
  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput('');
      playSound('add.mp3');
    }
  };

  // Delete task
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    playSound('delete.mp3');
  };

  // Toggle task completion
  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    playSound('complete.mp3');
  };

  return (
    <div className="App">
      <h1>QuestBoard 🧙‍♂️</h1>
      <h2>Level: {level}</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add your quest..."
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <span onClick={() => toggleComplete(index)}>{task.text}</span>
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;