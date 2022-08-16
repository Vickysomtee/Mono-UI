import React from 'react'

import MonoLogo from '../assets/Group.png'


export const SideBar = () => {
  return (
    <div>
      <div class="w-60 h-full shadow-md bg-black px-1 absolute pt-10 top-0">
      <img className='w-50 h-5 mb-10 mt-8 px-10' src={MonoLogo} alt="" />
        <ul class="relative">
          <li class="relative">
            <a class="flex items-center text-md py-4 mb-3 px-10 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded text-[#e1e1e1]" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Dashboard</a>
          </li>
          <li class="relative">
            <a class="flex items-center text-md py-4 mb-3 px-10 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded text-[#878787]" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Expenses</a>
          </li>
          <li class="relative">
            <a class="flex items-center text-md py-4 mb-3 px-10 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded text-[#878787]" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Wallets</a>
          </li>
          <li class="relative">
            <a class="flex items-center text-md py-4 mb-3 px-10 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded text-[#878787]" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Summary</a>
          </li>
          <li class="relative">
            <a class="flex items-center text-md py-4 mb-3 px-10 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded text-[#878787]" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Accounts</a>
          </li>
          <li class="relative">
            <a class="flex items-center text-md py-4 mb-3 px-10 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded text-[#878787]" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Settings</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar;
