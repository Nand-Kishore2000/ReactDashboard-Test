import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex w-[100%] lg:w-full lg:flex-row flex-col  h-[100px] lg:h-[50px] justify-around lg:justify-between items-center bg-white  border-b-2 pl-[10px] ' >
         
            <NavLink to='/'>
            <div className='text-[20px] font-medium'>
                APP LOGO
            </div>
            </NavLink>
            <div className='flex w-2/12 justify-evenly items-center   text-sm font-medium space-x-2'>
                <NavLink to='/'>
                    <div 
                    className="border-2 border-gray-100 p-1
                     bg-gray-100 lg:border-none lg:bg-white
                      rounded-md lg:rounded-none">DASHBOARD</div>
                </NavLink>
                <NavLink to='/createads'>
                    <div
                     className="border-2 border-gray-100 p-1
                     bg-gray-100 lg:border-none lg:bg-white
                      rounded-md lg:rounded-none"
                       >CREATEADS</div>
                </NavLink>
            </div>
      
    </div>
  )
}

export default Navbar