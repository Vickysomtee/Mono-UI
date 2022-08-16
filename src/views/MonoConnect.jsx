import React from 'react'
import MonoConnect from '@mono.co/connect.js';

import SideBar from '../components/SideBar'

import arr from '../assets/icons/arrow-right.svg'
import lock from '../assets/icons/Group 202padlock.svg'

const MonoLink = () => {
  const monoConnect = React.useMemo(() => {
    const monoInstance = new MonoConnect({
      onClose: () => console.log('Widget closed'),
      onLoad: () => console.log('Widget loaded successfully'),
      onSuccess: ({ code }) => console.log(`Linked successfully: ${code}`),
      key: "test_pk_0fwxulSitZ11rGOB6tZU"
    })

    monoInstance.setup()

    return monoInstance;
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