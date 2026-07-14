import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    // console.log(handleLogin);
    

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email,password);
        console.log('email is',email);
        console.log('password is',password );
        

        // login ke baad bapis khali ho jayega
        setemail('')
        setpassword('')
    }


    return (
        <div className='flex h-screen w-screen  items-center justify-center'>
            <div className='border-2 rounded-xl border-emerald-600 p-20'>
                <form onSubmit={(e) => {
                    submitHandler(e)
                }}
                    className='flex flex-col items-center justify-center'>

                    <input
                        value={email}
                        onChange={(e) => {
                            setemail(e.target.value)
                        }}
                        required
                        className='outline-none bg-transparent border-2 border-emerald-600 text-xl   py-4 px-5 rounded-full placeholder:text-gray-400'
                        type='email'
                        placeholder='enter your email'
                    />

                    <input
                    value={password}
                        onChange={(e) => {
                            setpassword(e.target.value)
                        }}
                        required
                        className='outline-none bg-transparent border-2 border-emerald-600 text-xl   py-4 px-5 rounded-full  mt-5 placeholder:text-gray-400'
                        type='password'
                        placeholder='enter your password'
                    />

                    <button
                        className='mt-5 text-white border-none outline-none bg-emerald-600 text-xl   py-4 px-5 rounded-full placeholder:text-white'>
                        Login In</button>
                </form>
            </div>

        </div>
    )
}

export default Login