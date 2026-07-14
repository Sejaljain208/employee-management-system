import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AlllTask = () => {

  const authdata = useContext(AuthContext)
  
  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
       <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded '>
        <h2 className='text-lg font-bold w-1/5 '>Employee Name</h2>
        <h3 className='text-lg font-bold w-1/5 '> New Task</h3>
        <h5 className='text-lg font-bold w-1/5 ' >Active Task</h5>
        <h5 className='text-lg font-bold w-1/5 ' >Completed</h5>
        <h5 className='text-lg font-bold w-1/5 ' >failed</h5>
      </div>
   
     <div className=''>
       {authdata.employees.map(function(elem , idx){
         return <div  key={idx} className='border border-emerald-300 mb-2 py-2 px-4 flex justify-between rounded '>
        <h2 className='text-lg w-1/5'>{elem.firstName}</h2>
        <h3 className='text-lg w-1/5 text-blue-500 font-bold'>{elem.taskNumbers.newTask}</h3>
        <h5 className='text-lg w-1/5 text-yellow-400 font-bold' >{elem.taskNumbers.active}</h5>
        <h5 className='text-lg w-1/5 text-green-500 font-bold' >{elem.taskNumbers.completed}</h5>
        <h5 className='text-lg w-1/5 text-red-600 font-bold' >{elem.taskNumbers.failed}</h5>
      </div>
      })}
     </div>
     
     
      </div>
  )
}

export default AlllTask
