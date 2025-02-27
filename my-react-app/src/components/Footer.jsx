import React from 'react'
import { useContext } from 'react'
import context from '../utils/Usercontext'

const Footer = () => {
  const {user}=useContext(context);
  return (
    <div className='flex justify-center'>
      <h1 className='font-bold text-slate-900 '>This site is developed by {user.name}-{user.email}</h1>
    </div>
  )
}

export default Footer