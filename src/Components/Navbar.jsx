import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'


const Navbar = () => {
  const {user,logOut} = UserAuth()
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try{
      await logOut();
      navigate('/')
    }catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='text-white nav__container flex items-center justify-between p-4 z-[100] w-full absolute'>
    <Link to='/'>
    <h1 className='text-red-800 text-3xl font-bold font-sans cursor-pointer md:text-6xl'>Rachidflix</h1>
    </Link>
      {user?.email ?(
        <div className="log__block">
        <Link to='/account'>
        <button className="bg-white px-6 py-2 text-red-400 ">Account</button>
        </Link>
        <Link to='/signup'>
        <button onClick={handleLogOut} className='bg-red-600 px-6 py-2'>Logout</button>
        </Link>   
    
        </div>
      ):(
          <div className="log__block">
        <Link to='/login'>
        <button className="bg-white px-6 py-2 text-red-400 ">Sign In</button>
        </Link>
        <Link to='/signup'>
        <button className='bg-red-600 px-6 py-2'>Register</button>
        </Link>   
    
        </div>
        )}
    </div>
  )
}

export default Navbar
