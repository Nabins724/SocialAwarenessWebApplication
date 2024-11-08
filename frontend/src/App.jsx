import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from '../src/pages/home.jsx';
import SignUpPage from '../src/pages/signup.jsx';
import LoginPage from './pages/login.jsx';
import ProfilePage from './pages/profile/Profile.jsx';
import AboutUs from './pages/aboutus.jsx';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex max-w-6xl mx-auto'></div>

    {/* Routing component.  */}
      <Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/signup' element={<SignUpPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/profile/:username' element={<ProfilePage />} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/logout' element={<LoginPage/>} />


			</Routes>

    </>
  )
}

export default App
