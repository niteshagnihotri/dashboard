import React from 'react'
import Navlink from './Navlink'

const HeaderNav = () => {

  const routes = ['My Tasks', 'Reporting', 'Portfolios', 'Goals']

  return (
    <div className=' flex flex-row items-center font-Noto lg:space-x-4 xl:space-x-7 '>
      <h1 className='text-xs text-gray-500 font-bold'>Dashboard</h1>
      {
        routes.map((route, ind) => {
          return (
            <Navlink key={ind} value={route} />
          )
        })
      }
    </div>


  )
}

export default HeaderNav