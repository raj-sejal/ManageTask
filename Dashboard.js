import React from 'react';
import TaskList from './TaskList';
import SearchFilter from './SearchFilter';

function Dashboard({ tasks, updateTask, deleteTask }) {
  return (
    <div>
      <SearchFilter />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
}

export default Dashboard;
