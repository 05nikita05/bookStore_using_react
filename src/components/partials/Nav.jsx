import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='w-full flex justify-between px-20 py-5 bg-blue-600 text-zinc-100'>
        <NavLink to={'/'} className='text-lg font-semibold'>Books</NavLink>
     
    </div>
  )
}

export default Nav