import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import Filter from './components/Filter';

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  // Fetch tasks from localStorage when the app loads
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Save tasks to localStorage whenever tasks state is updated
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const getFilteredTasks = () => {
    if (filter === "Completed") {
      return tasks.filter(task => task.completed);
    } else if (filter === "Pending") {
      return tasks.filter(task => !task.completed);
    }
    return tasks;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-4 text-blue-500">To-Do List</h1>

        <TaskInput task={task} setTask={setTask} addTask={addTask} />
        <Filter filter={filter} setFilter={setFilter} />
        <TaskList tasks={getFilteredTasks()} toggleTask={toggleTask} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
