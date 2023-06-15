import React from 'react'

const Navlink = ({ icon, title, count }) => {
  return (
    <div className='w-full flex flex-row items-center justify-between text-[0.7rem] space-x-3 font-Poppins '>
      <div className='flex flex-row items-start space-x-2 text-sm cursor-pointer'>
        <span className='text-blue-500 text-lg'>{icon}</span>
        <h1 className='text-[0.78rem]'>{title}</h1>
      </div>
      {
        count > 0 ?
          <h1 className='px-2 py-1 rounded-full bg-blue-200 text-blue-700 font-semibold'>
            {count}
          </h1>
          :
          null
      }
    </div>
  )
}

export default Navlink