import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGetCurrentUserQuery } from '@/features/auth/authApi';
import { setUser } from '@/redux/features/userSlice';

export const useAuthInit = () => {
  const dispatch = useDispatch();

  // This will call the API and give you data if cookie (token) exists
  const { data, isSuccess } = useGetCurrentUserQuery(null, {
    skip: typeof window === 'undefined', // SSR safe
  });

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setUser(data)); // ✅ Only dispatch after render
    }
  }, [isSuccess, data, dispatch]);
};
