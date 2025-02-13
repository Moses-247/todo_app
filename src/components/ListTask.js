import React from 'react';
import Task from './Task';

const ListTask = ({ tasks, onEdit, onDelete, onToggle }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default ListTask;
