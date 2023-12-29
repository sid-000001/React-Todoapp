import React, { useState, useEffect } from "react";

const Todolite = () => {
  // State to store tasks and new task input
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  useEffect(() => {
    // Save the current state to history whenever tasks change
    setHistory([...history.slice(0, historyIndex + 1), tasks]);
    setHistoryIndex(history.length - 1);
  }, [tasks]);

  // Function to add a new task
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  // Function to toggle the completion status of a task
  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to remove a task
  // Function to remove a task
  const removeTask = (taskId, completed) => {
    if (completed) {
      setTasks(tasks.filter((task) => task.id !== taskId));
    } else {
      alert("Please check the task before removing.");
      // Alternatively, you can provide user feedback in a different way.
      // For simplicity, this example uses an alert.
    }
  };

  const undo = () => {
    if (historyIndex > 0) {
      setTasks(history[historyIndex - 1]);
      setHistoryIndex(historyIndex - 1);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      setTasks(history[historyIndex + 1]);
      setHistoryIndex(historyIndex + 1);
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add Task</button>
        <button onClick={undo} disabled={historyIndex === 0}>
          Undo
        </button>
        <button onClick={redo} disabled={historyIndex === history.length - 1}>
          Redo
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
            <button onClick={() => removeTask(task.id, task.completed)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolite;
