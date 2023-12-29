import React, { useState } from "react";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), text: newTask, completed: false },
      ]);
      setNewTask("");
    }
  };

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

  return (
    <div>
      <h1>Simple Todo App</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.id}
            {task.text}
            <button onClick={() => removeTask(task.id, task.completed)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
