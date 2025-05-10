'use client';
import { editTask } from '@/redux/features/tasksSlice';
import { showSnackbar } from '@/redux/features/uiSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


const EditModal = ({ task, onClose }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTask({ id: task.id, updatedTask: { title, description, priority } }));
    dispatch(showSnackbar({ message: 'Task edited successfully!', type: 'success' }));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-80 space-y-4">
        <h2 className="text-lg font-bold">Edit Task</h2>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
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
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} type="button" className="text-gray-500 hover:cursor-pointer">Cancel</button>
          <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded hover:cursor-pointer">Save</button>
        </div>
      </form>
    </div>
  );
};

export default EditModal;