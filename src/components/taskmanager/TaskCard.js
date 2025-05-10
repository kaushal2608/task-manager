import React from 'react';

const priorityColors = {
  High: 'bg-red-500',
  Medium: 'bg-yellow-400',
  Low: 'bg-green-500',
};

const TaskCard = ({ task, onEdit, onDelete }) => {
  return (
    <div className="bg-gray-100 p-4 rounded shadow flex justify-between items-start">
      <div>
        <h3 className="text-lg font-semibold">{task.title}</h3>
        <p className="text-sm text-gray-600">{task.description}</p>
        <span className={`text-xs text-white px-2 py-1 rounded ${priorityColors[task.priority]}`}>{task.priority}</span>
      </div>
      <div className="space-x-2">
        <button onClick={() => onEdit(task)} className="text-blue-500 hover:cursor-pointer">Edit</button>
        <button onClick={() => onDelete(task.id)} className="text-red-500 hover:cursor-pointer">Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;