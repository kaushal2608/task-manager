'use client';
import { clearSnackbar } from '@/redux/features/uiSlice';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Snackbar = () => {
  const dispatch = useDispatch();
  const { message, type, visible } = useSelector((state) => state.ui.snackbar);


  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => dispatch(clearSnackbar()), 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, dispatch]);

  if (!visible) return null;

  const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-gray-700';

  return (
    <div className={`fixed bottom-6 left-6 ${bgColor} text-white px-4 py-2 rounded shadow-lg z-[100]`}>
      {message}
    </div>
  );
};

export default Snackbar;