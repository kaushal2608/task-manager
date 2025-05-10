"use client";
import TaskTabs from "@/components/taskmanager/TaskTabs";
import { useLoginMutation } from "@/features/auth/authApi";
import { useSelector } from "react-redux";

const HomePage = () => {
  const user = useSelector((state) => state.user);
  const [login, { isLoading }] = useLoginMutation(); // way of calling api using rtk query 

  const handleLogin = async (e) => { //  function for calling api and other 
    e.preventDefault();
    try {
      const res = await login(formData).unwrap();
      dispatch(setUser(res.user)); // save user in Redux
      router.push('/'); // redirect to home
    } catch (err) {
      alert(err.data?.message || 'Login failed');
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-2xl mx-auto mt-10">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Task Manager
        </h1>
        <TaskTabs />
        {/* <TaskList /> */}
      </div>
    </div>
  );
};

export default HomePage;
