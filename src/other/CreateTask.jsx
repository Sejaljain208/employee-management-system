import React, { useState } from 'react'

const CreateTask = () => {

    const [tasktitle, settasktitle] = useState('')
    const [taskDescription, settaskDescription] = useState('')
    const [taskDate, settaskDate] = useState('')
    const [category, setcategory] = useState('')
    const [assignTo, setAssignTo] = useState('')

    const [newTask, setnewTask] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()

        const newTask = {
            taskTitle: tasktitle,
            taskDescription: taskDescription,
            taskDate: taskDate,
            category: category,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        }

        const data = JSON.parse(localStorage.getItem('employees'))

        const employee = data.find(
            (elem) =>
                elem.firstName.toLowerCase() === assignTo.trim().toLowerCase()
        )

        if (employee) {
            employee.tasks.push(newTask)
            employee.taskNumbers.newTask += 1

            localStorage.setItem('employees', JSON.stringify(data))

            console.log("Task created:", newTask)
            console.log("Assigned to:", employee.firstName)

            alert("Task created successfully")

            // Fields sirf successful hone ke baad clear hongi
            setAssignTo('')
            setcategory('')
            settaskDate('')
            settaskDescription('')
            settasktitle('')
        } else {
            alert("Employee not found")

            // Employee nahi mila to fields clear nahi hongi
        }
    }

    return (
        <div className='p-5 bg-[#1C1C1C] mt-7 rounded'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }}
                className='flex flex-wrap w-full items-start justify-between'>

                <div className='w-1/2 '>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                            value={tasktitle}
                            onChange={(e) => {
                                settasktitle(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray mb-4' type="text" placeholder='Make a UI Design' />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => {
                                settaskDate(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray mb-4' type="date" />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                        <input
                            value={assignTo}
                            onChange={(e) => {
                                setAssignTo(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray mb-4' type="text" placeholder='Employee name' />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => {
                                setcategory(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray mb-4' type="text" placeholder='Design , Dev etc.. ' />
                    </div>

                </div>

                <div className='w-1/2 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => {
                            settaskDescription(e.target.value)
                        }}
                        className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray mb-4' name="" id="" cols="30" rows="10"></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 min-w-full'>Create Task</button>
                </div>


            </form>
        </div>
    )
}

export default CreateTask
