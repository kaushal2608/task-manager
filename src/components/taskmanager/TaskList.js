'use client';
import { deleteTask } from '@/redux/features/tasksSlice';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskCard from './TaskCard';
import EditModal from './EditModal';
import { showSnackbar } from '@/redux/features/uiSlice';


const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [editingTask, setEditingTask] = useState(null);

  const sortedTasks = [...tasks].sort((a, b) => {
    const order = { High: 0, Medium: 1, Low: 2 };
    return order[a.priority] - order[b.priority];
  });

  const handleDelete = (id) =>{ 
    dispatch(deleteTask(id));
    dispatch(showSnackbar({ message: 'Task deleted successfully!', type: 'success' }));
  };

  return (
    <div className="space-y-4 ">
      {sortedTasks.length === 0 ? (
        <p className="text-center text-gray-500">No task found. Create a task to view.</p>
      ) : (
        sortedTasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={setEditingTask}
            onDelete={handleDelete}
          />
        ))
      )}
      {editingTask && (
        <EditModal task={editingTask} onClose={() => setEditingTask(null)} />
      )}
    </div>
  );
};

export default TaskList;