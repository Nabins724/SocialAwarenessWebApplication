import { useState } from 'react';
import {Navigate, Routes, Route} from 'react-router-dom';
import HomePage from '../src/pages/home.jsx';
import SignUpPage from '../src/pages/signup.jsx';
import LoginPage from './pages/login.jsx';
import ProfilePage from './pages/profile/Profile.jsx';
import AboutUs from './pages/aboutus.jsx';
import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";


function App() {
  const { data: authUser, isLoading } = useQuery({
		queryKey: ["authUser"],
		queryFn: async () => {
			try {
				const res = await fetch("/api/auth/me");
				const data = await res.json();
				if (data.error) return null;
				if (!res.ok) {
					throw new Error(data.error || "Something went wrong");
				}
				// console.log("authUser is here:", data);
				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
		retry: false,
	});


  return (
    <>
    <div className='flex max-w-6xl mx-auto'></div>

    {/* Routing component.  */}
      <Routes>
				<Route path='/' element={authUser ? <HomePage /> : <Navigate to='/profile/:username' />} />
				<Route path='/signup' element={!authUser ? <SignUpPage /> : <Navigate to='/login' />} />
				<Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to='/' />} />
				<Route path='/profile/:username' element= { authUser ? <ProfilePage /> : <Navigate to='/login' />} />
        <Route path='/aboutus' element={ authUser ? <AboutUs /> : <Navigate to='/login'/>} />
			</Routes>
      <Toaster />

    </>
  )
}

export default App
