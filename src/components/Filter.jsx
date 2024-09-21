import React from 'react';

function Filter({ filter, setFilter }) {
  return (
    <div className="mb-4 flex justify-between">
      <button 
        onClick={() => setFilter("All")} 
        className={`px-3 py-1 rounded ${filter === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        All
      </button>
      <button 
        onClick={() => setFilter("Completed")} 
        className={`px-3 py-1 rounded ${filter === 'Completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        Completed
      </button>
      <button 
        onClick={() => setFilter("Pending")} 
        className={`px-3 py-1 rounded ${filter === 'Pending' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        Pending
      </button>
    </div>
  );
}

export default Filter;
