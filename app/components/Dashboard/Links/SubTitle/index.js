import React from 'react';
import {MdKeyboardArrowUp} from 'react-icons/md';

const SubTitle = ({value}) => {
  return (
    <div className='flex justify-between items-center py-7'>
        <h5 className='text-xs uppercase font-semibold text-gray-400'>{value}</h5>
        <MdKeyboardArrowUp className='text-lg text-blue-500'/>
    </div>
  )
}

export default SubTitle