import React from 'react';
import Task from './Task';

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul className="space-y-3">
      {tasks.map((task, index) => (
        <Task 
          key={index} 
          task={task} 
          index={index} 
          toggleTask={toggleTask} 
          deleteTask={deleteTask} 
        />
      ))}
    </ul>
  );
}

export default TaskList;
