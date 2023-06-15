import React from 'react'

const HeaderNav = () => {

  const routes = ['Calender', 'Dashboard', 'Progress', 'Forms', 'More']

  return (
    <div className='flex flex-row justify-center leading-5 items-center flex-shrink flex-wrap space-x-2 md:space-x-5 lg:space-x-3 xl:space-x-5 text-[0.72rem] font-Noto Sans'>
      <h1 className='block text-blue-500 border-b-2 border-b-blue-500 font-bold py-1'>Timeline</h1>
      {
        routes.map((route, ind) => {
          return (
            <h1 key={ind} className='text-gray-500 font-semibold'>{route}</h1>
          )
        })
      }
    </div>


  )
}

export default HeaderNav