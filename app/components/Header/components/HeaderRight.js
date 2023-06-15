import React from 'react';
import Image from 'next/image';
import { AiOutlineFolder, AiOutlineBell } from 'react-icons/ai';

const HeaderRight = () => {
  return (
    <div className='flex flex-row items-center space-x-3'>
      <AiOutlineFolder className='text-xl text-gray-400 font-bold' />
      <AiOutlineBell className='text-xl text-gray-400 font-bold' />
      <div className='relative'>
        <div className="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-2 translate-x-2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-red-500 px-[0.4rem] py-1 text-center align-baseline text-xs font-bold leading-none text-white">
          4
        </div>
        <Image src={"https://picsum.photos/200"} className='object-fill w-9 h-9 border-[3px] border-blue-500  rounded-full p-[0.15rem]' width={"30"} height={"30"} alt="profile" />
      </div>
    </div>
  )
}

export default HeaderRight