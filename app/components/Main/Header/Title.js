import React from 'react'
import {HiPencil} from 'react-icons/hi';

const Title = ({value}) => {
  return (
    <div className='flex flex-row items-center space-x-6'>
        <h1 className='text-3xl tracking-tight font-semibold'>{value}</h1>
        <HiPencil className='text-2xl text-gray-400'/>
    </div>
  )
}

export default Title