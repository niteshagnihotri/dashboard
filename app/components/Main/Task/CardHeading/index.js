import React from 'react';
import {BsThreeDots} from 'react-icons/bs';

const CardHeading = ({title, count}) => {
  return (
    <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row items-center space-x-2'>
            <h1 className='text-sm font-semibold font-Poppins text-gray-600'>{title}</h1>
            <span className={"px-[0.5rem] py-1 text-xs bg-red-200 font-semibold rounded-full text-red-700"}>{count}</span>
        </div>
        <BsThreeDots className='text-gray-400 cursor-pointer'/>
    </div>
  )
}

export default CardHeading