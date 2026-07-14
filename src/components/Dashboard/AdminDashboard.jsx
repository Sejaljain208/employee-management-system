import React from 'react'
import Header from '../../other/Header'
import CreateTask from '../../other/CreateTask'
import AlllTask from '../../other/AlllTask'

const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-10'>
            <Header changeUser={props.changeUser} />
           <CreateTask />
           <AlllTask />

        </div>
    )
}

export default AdminDashboard
