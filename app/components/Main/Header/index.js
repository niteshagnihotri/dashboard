import React from 'react'
import Title from './Title'
import HeaderNav from './HeaderNav'
import HeaderRight from './HeaderRight'


const MainHeader = () => {
  return (
    <div className="flex w-full flex-col space-y-3 xl:flex-row items-center justify-center xl:justify-between font-Public Sans">
        <Title value={"Task Boards"}/>
        <HeaderNav/>
        <HeaderRight/>
    </div>
  )
}

export default MainHeader