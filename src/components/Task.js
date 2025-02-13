// src/components/Task.js
import React from 'react';

const Task = ({ task, onEdit, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.isDone ? 'done' : ''}`}>
      <span onClick={() => onToggle(task.id)}>{task.description}</span>
      <button onClick={() => onEdit(task.id)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
