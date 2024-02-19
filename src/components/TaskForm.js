import React, { useState } from 'react';

// TaskForm component renders a form to add new tasks
const TaskForm = ({ onAddTask }) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if new task title is not empty, then add task
    if (newTaskTitle.trim() === '') return;
    onAddTask(newTaskTitle);
    setNewTaskTitle('');
  };

  return (
    <form onSubmit={handleSubmit} >
      {/* Text input for entering new task title */}
      <input
        type="text"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        placeholder="Add New Task..."
      />
      {/* Button to submit the form */}
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
