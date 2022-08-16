import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../api/axios'
import {setToken} from '../utils/auth'

import MonoLogo from "../assets/Grouplogo.png"



const Register = () => {

  let navigate = useNavigate();

  const [firstName, setFirstName] = useState();

  const [lastName, setLastName] = useState();

  const [email, setEmail] = useState();

  const [password, setPassword] = useState();


  const payload = {
    firstName, lastName, email, password
  }

  const register = async (e) => {
    e.preventDefault()
    
    try {

      if (!firstName || !lastName || !email || !password) {
        alert('All Inputs are required')
        return;
      }
      const  {data}  = await axios.post('register', payload);
      setToken(data.data.token)
      navigate('/link-account')

    } catch (error) {
      if (error) {
        console.log(error.response.data)
        return
      }
    }
  }

  return (
    <div className='bg-black w-full h-screen'>
      <div className='flex items-center justify-center h-screen'>
        <div className="md:container-xl md:mx-auto bg-white w-[800px] text-center p-[50px] rounded-[15px]">
          <img src={MonoLogo} alt="Mono logo" className='w-55 h-7 mb-8 my-0 mx-auto' />
          <div className='text-[#585858] mt-5'>Track all your bank expenses in your place</div>

          <form onSubmit={register} className='mt-10 form-control text-center'>
            <div className=' flex justify-between w-[400px] my-0 mx-auto'>
              <input
                type="text"
                class="
                block
                h-[60px]
                w-[180px]
                mb-7
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-stone-900
                rounded
                transition
                ease-in-out
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
              />
              <input
                type="text"
                class="
                block
                h-[60px]
                w-[180px]
                mb-7
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-stone-900
                rounded
                transition
                ease-in-out
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
              />
            </div>
            <input
              type="email"
              class="
                block
                h-[60px]
                w-[400px]
                mb-7
                my-0 mx-auto
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-stone-900
                rounded
                transition
                ease-in-out
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              class="
                block
                h-[60px]
                w-[400px]
                mb-7
                my-0 mx-auto
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-stone-900
                rounded
                transition
                ease-in-out
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <div class="flex space-x-2 justify-center">
              <button type="submit" class="inline-block px-6 py-2.5 h-[60px] w-[400px] bg-[#6979F8] text-white font-medium text-[17px] rounded-[5px] shadow-md ">Get Started</button>
            </div>
          </form>
          <div className='mt-10 text-[#182CD1]'>Already have an account? <span><Link to="/login">Sign In</Link></span></div>
        </div>
      </div>
    </div>
  )
}

export default Register