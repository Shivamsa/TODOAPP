import React from 'react';
import Task from './Task';

// TaskList component renders a list of tasks
const TaskList = ({ tasks, onToggleCompleted, onDelete }) => {
  return (
    <ul>
      {/* Map through tasks array and render Task component for each task */}
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onToggleCompleted={onToggleCompleted}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TaskList;
