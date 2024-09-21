import React from 'react';

function Task({ task, index, toggleTask, deleteTask }) {
  return (
    <li className="flex justify-between items-center p-2 bg-gray-100 rounded-lg shadow">
      <span className={`flex-1 ${task.completed ? 'line-through text-gray-400' : ''}`}>
        {task.text}
      </span>
      <div className="">
        <button 
          onClick={() => toggleTask(index)} 
          className="bg-green-500 text-white mr-2 px-2 py-1 rounded hover:bg-green-700"
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button 
          onClick={() => deleteTask(index)} 
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default Task;
