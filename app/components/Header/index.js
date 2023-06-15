import React from 'react'
import HeaderLeft from './components/HeaderLeft'
import HeaderNav from './components/HeaderNav'
import HeaderRight from './components/HeaderRight'

const Header = () => {
  return (
    <div className='hidden lg:visible lg:flex lg:justify-between lg:items-center border-b py-5 px-8'>
        <HeaderLeft/>
        <HeaderNav/>
        <HeaderRight/>
    </div>
  )
}

export default Header