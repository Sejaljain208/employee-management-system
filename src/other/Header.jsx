import React, { useState } from 'react'
import { setLocalStorage } from '../utils/localStorage'

const Header = (props) => {

  // console.log(data);
  const [username, setusername] = useState('')

  // if(!data){
  //   setusername('Admin')
  // }
  // else{
  //   setusername(data.firstName)
  // }

  const logOut = () => {
   localStorage.removeItem('loggedInUser')

  //  log out ho iske liye 
   props.changeUser('')   
  //  window.location.reload()
  }
  
  return (
    <div className='flex items-end justify-between'>
        
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-bold'> Employee 👋</span> </h1>
        <button 
        onClick={logOut}
        className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>
          Log Out
          </button>
    </div>
  )
}

export default Header