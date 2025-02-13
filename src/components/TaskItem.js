import React from 'react';

const TaskItem = ({ task, index, onEdit, onDelete, onToggleComplete }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <button onClick={() => onEdit(index)}>Edit</button>
      <button onClick={() => onDelete(index)}>Delete</button>
      <button onClick={() => onToggleComplete(index)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
    </div>
  );
};

export default TaskItem;
