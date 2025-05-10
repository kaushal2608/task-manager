'use client';
import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const TaskTabs = () => {
  const [activeTab, setActiveTab] = useState('form');

  return (
    <div className="bg-white p-4 rounded">
      <div className="flex space-x-4 border-b mb-4">
        <button
          className={`pb-2 px-4 ${activeTab === 'form' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'} hover:cursor-pointer`}
          onClick={() => setActiveTab('form')}
        >
          Add Task
        </button>
        <button
          className={`pb-2 px-4 ${activeTab === 'list' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'} hover:cursor-pointer`}
          onClick={() => setActiveTab('list')}
        >
          Task List
        </button>
      </div>
      <div>
        {activeTab === 'form' && <TaskForm />}
        {activeTab === 'list' && <TaskList />}
      </div>
    </div>
  );
};

export default TaskTabs;