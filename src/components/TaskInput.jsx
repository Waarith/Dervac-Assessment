import React from 'react';

function TaskInput({ task, setTask, addTask }) {
  return (
    <div className="flex mb-4">
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Add task here..." 
        className="border border-gray-300 p-2 rounded-l-md w-full"
      />
      <button 
        onClick={addTask} 
        className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 hover:border hover:border-1 hover:border-gray-500"
      >
        Submit
      </button>
    </div>
  );
}

export default TaskInput;
