import React from 'react';

function SearchFilter() {
  return (
    <div>
      <input type="text" placeholder="Search tasks..." />
      <select>
        <option value="">All</option>
        <option value="High">High Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="Low">Low Priority</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </select>
    </div>
  );
}

export default SearchFilter;
