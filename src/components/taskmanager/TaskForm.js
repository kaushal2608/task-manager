'use client';
import { addTask } from '@/redux/features/tasksSlice';
import { showSnackbar } from '@/redux/features/uiSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


const TaskForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch(addTask({ title, description, priority }));
    setTitle('');
    setDescription('');
    setPriority('Medium');
    dispatch(showSnackbar({ message: 'Task created successfully!', type: 'success' }));
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:cursor-pointer">
        Add Task
      </button>
    </form>
    </div>
  );
};

export default TaskForm;
