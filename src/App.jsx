// windows + .(dot) = shortcut for emoji 

import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setuser] = useState(null)
  const [LoggedInUserData, setLoggedInUserData] = useState(null)

  const Authdata = useContext(AuthContext)
  // console.log(Authdata) 

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
  
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)

      setuser({role : userData.role })
      setLoggedInUserData(userData.data)
    }
  } , [])

  const handleLogin = (email, password) => {

    if (email == 'admin@me.com' && password == 'password123') {

      setuser({role : 'admin'})

      localStorage.setItem(
        'loggedInUser', 
        JSON.stringify({ role: 'admin' })
      )
    }
    else if (Authdata) {
      
      const employees = Authdata.employees.find(
        (e) => email == e.email && e.password == password
      )
      if (employees) {

        setuser({role : 'employees'})
        setLoggedInUserData(employees)

        localStorage.setItem(
          'loggedInUser', 
          JSON.stringify(
            { role: 'employees' ,
               data: employees
              })
            )
      }
    else {
      alert('Invalid Credential')
    }
  }
}


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}

      {user?.role == 'admin' ? <AdminDashboard changeUser={setuser} /> : user?.role == 'employees' ? <EmployeeDashboard changeUser={setuser} data={LoggedInUserData}  /> : ''}

    </>
  )
}

export default App