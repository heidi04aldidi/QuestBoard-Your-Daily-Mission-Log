import React, { useState } from 'react';
import './App.css';
import { playSound } from './soundPlayer';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

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

  return (
    <div className="App">
      <h1>QuestBoard 🧙‍♂️</h1>

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
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(index)}
              />
              <span className={task.completed ? 'strikethrough' : ''}>
                {task.text}
              </span>
            </label>
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
