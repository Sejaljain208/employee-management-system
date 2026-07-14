import React from 'react'

const NewTask = ({data}) => {
  return (
     <div className='shrink-0 h-full w-75 p-5 ml-2 bg-red-400 rounded-2xl '>
        
        <div className='flex justify-between items-center '>

            <h3 className='bg-red-400 px-3 py-1 rounded text-sm'>{data.Category}</h3>

            <h4 className='text-sm'> {data.taskDate} </h4>

        </div>

          <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle} </h2>
          <p className='text-sm mt-2'>
            {data.taskDescription} 
            </p>

         <div className='mt-4 '>
            <button className='bg-blue-400 rounded font-medium py-1 px-2 text-xs'>Accept Task</button>
         </div>
       
      </div>

  )
}

export default NewTask
