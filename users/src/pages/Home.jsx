import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
    <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
        Find your next <span className='text-slate-500'>perfect</span> 
        <br />
        place with ease
      </h1>
      <div className='text-gray-400 text-xs sm:text-sm'>
         This is the best place to find a property.
         <br />
         We have a wide range of properties for you to choose from.
      </div>
      <div className='flex gap-6'>
      <Link to={'/search'} className='text-xs sm:text-sm
      text-blue-800 font-bold hover:underline'>Search Property...</Link>
        <Link to='/create-listing' className='text-xs sm:text-sm
      text-blue-800 font-bold hover:underline'>
           List your property...
          </Link>
          </div>
    </div>
  )
}

export default Home