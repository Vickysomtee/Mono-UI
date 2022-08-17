import React from 'react'

import SideBar from '../components/SideBar'

import options from '../assets/icons/options.svg';
import profile from '../assets/Profile.png';
import calendar from '../assets/icons/calendar.svg';
import transaction from '../assets/icons/transaction.svg';
import chart from '../assets/icons/Stats.svg'

const Dashboard = () => {
  return (
    <div>
      <SideBar />
      <div className='flex justify-between'>


        <div className='ml-[250px] w-[60%] px-[40px] py-[40px] h-screen border-r shadow-sm '>
          <div className='flex justify-between font-medium text-[17px] pb-5 mb-10 border-b'>

            <div className='flex'>
              <img className='w-[50px] h-[50px]' src={profile} alt="" />
              <h1 className='relative top-3 left-2'>Good morning, Ola</h1>
            </div>
            <div className='flex '>
              <div className=' relative top-3'>Today</div>
              <img className='w-[20px] h-[20px] relative top-4' src={calendar} alt="" />
            </div>
          </div>

          <div className=''>
            <img className='my-0 mx-auto w-[1000px]' src={chart} alt="" />
          </div>

          <div className='mt-[100px]'>
            <div className='flex justify-between font-light text-[25px] pb-5 mb-10 border-b'>
              <h1 className=''>Latest Transactions</h1>
              <img src={options} alt="" />
            </div>

            <div className='flex justify-between'>
              <div className='flex w-[300px]'>
                <img className='w-[100px] h-[80px]' src={transaction} alt="" />
                <div className=' pl-3'>
                  <h1 className='font-bold text-2xl '>Uber Ride</h1>
                  <div className='pt-4 text-[15px]'>
                    <span> 11-11-21 </span>

                    <span> 8:12pm </span>

                    <span> Credit  </span>
                  </div>
                </div>
              </div>
              <div className='font-bold text-2xl '>-10,000</div>
            </div>

          </div>
        </div>

        <div className='bg-[#F2F6FF] w-[40%] p-[80px]'>
          <div className="md:container-xl md:mx-auto bg-white w-[500px] text-center p-[35px] rounded-[15px]">
            <div className='font-semibold mb-5 text-2xl'>Total Balance</div>
            <div className='font-bold text-5xl tracking-wide'>30,000,000</div>
            <div className='text-[#797F86] mt-5'>Your Balance across all banks</div>
            <div className='bg-[#FFF4F4] mt-5 text-[#F22828] font-semibold text-xl p-[20px] rounded-[15px]'>
              UNLINK BANK ACCOUNT
            </div>
          </div>

          <div className='flex justify-between text-[25px] font-light pb-5 mt-[60px] border-b'>
            <h1 className=''>Where you money go?</h1>
            <img src={options} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard