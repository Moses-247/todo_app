import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addOrUpdateTask = (task) => {
    if (taskToEdit !== null) {
      const updatedTasks = tasks.map((t, index) => 
        index === taskToEdit ? task : t
      );
      setTasks(updatedTasks);
      setTaskToEdit(null);
    } else {
      setTasks([...tasks, { ...task, completed: false }]);
    }
  };

  const deleteTask = (index) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    }
  };

  const toggleCompleteTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setTaskToEdit(index);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TaskForm onSave={addOrUpdateTask} taskToEdit={tasks[taskToEdit]} />
      <TaskList
        tasks={tasks}
        onEdit={editTask}
        onDelete={deleteTask}
        onToggleComplete={toggleCompleteTask}
      />
    </div>
  );
};

export default App;
