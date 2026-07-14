import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const [userData, setuserData] = useState(null)

  useEffect(() => {

    const employeesData = localStorage.getItem('employees')

    if (!employeesData) {
      setLocalStorage()
    }

    const { employees, admin } = getLocalStorage()

    setuserData({ employees, admin })

  }, [])

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider