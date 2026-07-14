import React from 'react'

const CompleteTask = ({data}) => {
  return (
      <div className='shrink-0 h-full w-75 p-5 ml-2 bg-blue-400 rounded-2xl '>
        
        <div className='flex justify-between items-center '>

            <h3 className='bg-red-400 px-3 py-1 rounded text-sm'>{data.category}</h3>

            <h4 className='text-sm'>{data.taskDate}</h4>

        </div>

          <h2 className='mt-5 text-2xl font-semibold'> {data.taskTitle} </h2>
          <p className='text-sm mt-2'>
            {data. taskDescription}</p>

            <div className='mt-2 '>
                <button className='w-full bg-green-400 rounded py-1 px-2 text-xs'>Complete</button>
            </div>
      </div>
  )
}

export default CompleteTask
