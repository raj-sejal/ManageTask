import React, { useState } from 'react';

function Task({ task, updateTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdate = () => {
    updateTask(editedTask);
    setIsEditing(false);
  };

  return (
    <div className="task">
      {isEditing ? (
        <input type="text" value={editedTask.title} onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })} />
      ) : (
        <h3>{task.title}</h3>
      )}
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      {isEditing && <button onClick={handleUpdate}>Update</button>}
    </div>
  );
}

export default Task;
