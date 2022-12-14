import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../api/axios';
import MonoConnect from '@mono.co/connect.js';

import SideBar from '../components/SideBar'

import arr from '../assets/icons/arrow-right.svg'
import lock from '../assets/icons/Group 202padlock.svg'

const MonoLink = () => {

  let navigate = useNavigate()

  const sendCode = async (code) => {
    await axios.patch("/exchange-token", { code }, {
      headers: {
        authorization: localStorage.getItem('token')
      }
    });
  }

  const monoConnect = React.useMemo(() => {
    const monoInstance = new MonoConnect({
      onSuccess: ({ code }) => {
        navigate("/dashboard");

        sendCode(code);
      },
      key: "test_pk_0fwxulSitZ11rGOB6tZU"
    })

    monoInstance.setup()

    return monoInstance;
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <SideBar />
      <div className='flex items-center justify-center h-screen'>
        <div className="w-96 bg-black p-10 ml-20 text-center rounded-xl ">
          <img src={lock} className="my-0 mx-auto" alt="" />
          <h1 className='mb-15 text-white text-3xl'>Final Step</h1>
          <p className='text-white mb-10 mt-3'> Link you Bank Accounts in seconds</p>
          <button className='flex text-blue-600 bg-white px-7 py-3 text-center text-2xl rounded-md font-bold my-0 mx-auto' onClick={() => monoConnect.open()}>
            <p>Link Now</p>
            <img className='relative left-2 top-2' src={arr} alt="link account" />
          </button>
        </div>
      </div>

    </div>
  )
}

export default MonoLink