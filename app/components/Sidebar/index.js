"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import {HiOutlineMenuAlt4} from 'react-icons/hi';

const Sidebar = () => {

  const [close, setClose] = useState(false);

  return (
    <div className={close ? 'w-[4vw]' : 'w-[7vw] border-l' + ' hidden lg:block min-h-screen delay-150 transition-all'}>
      <div className='py-7 flex justify-center border-b transition-all delay-150'>
      {
        close ?
        
        <HiOutlineMenuAlt4 onClick = {()=>setClose(!close)} className='text-gray-400 py-1 font-bold text-3xl cursor-pointer hover:text-gray-500' />
        :
        <MdClose onClick={()=>setClose(!close)} className='text-gray-400 font-bold py-1 text-3xl cursor-pointer hover:text-gray-500' />
      }

      </div>
      <div className={close ? 'hidden' : ' mt-28 flex flex-col space-y-8'}>

        <div className="relative inline-flex w-fit mx-auto">
          <div
            className="absolute bottom-0 left-auto right-0 top-auto z-10 inline-block -translate-x-0 translate-y-0 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-red-500 font-semibold p-1.5 text-xs">
          </div>
          <Image src={"https://picsum.photos/seed/picsum/200/300"} className='w-8 h-8 xl:w-10 xl:h-10 rounded-full' width={"30"} height={"30"} alt="profile" />
        </div>
        
        <div className="relative inline-flex w-fit mx-auto">
          <div
            className="absolute bottom-0 left-auto right-0 top-auto z-10 inline-block -translate-x-0 translate-y-0 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-red-500 font-semibold p-1.5 text-xs">
          </div>
          <Image src={"https://picsum.photos/seed/picsum/200/300"} className='w-8 h-8 xl:w-10 xl:h-10 border-[3px] border-blue-500 p-[0.15rem] rounded-full' width={"30"} height={"30"} alt="profile" />
        </div>

        <div className="relative inline-flex w-fit mx-auto">
          <div
            className="absolute bottom-0 left-auto right-0 top-auto z-10 inline-block -translate-x-0 translate-y-0 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-red-500 font-semibold p-1.5 text-xs">
          </div>
          <Image src={"https://picsum.photos/seed/picsum/200/300"} className='w-8 h-8 xl:w-10 xl:h-10 border-[3px] border-blue-500 p-[0.15rem]  rounded-full' width={"30"} height={"30"} alt="profile" />
        </div>

        <div className="relative inline-flex w-fit mx-auto">
          <div
            className="absolute bottom-0 left-auto right-0 top-auto z-10 inline-block -translate-x-0 translate-y-0 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-red-500 font-semibold p-1.5 text-xs">
          </div>
          <Image src={"https://picsum.photos/seed/picsum/200/300"} className='w-8 h-8 xl:w-10 xl:h-10 rounded-full' width={"30"} height={"30"} alt="profile" />
        </div>

        <div className="relative inline-flex w-fit mx-auto">
          <div
            className="absolute bottom-0 left-auto right-0 top-auto z-10 inline-block -translate-x-0 translate-y-0 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-red-500 font-semibold p-1.5 text-xs">
          </div>
          <Image src={"https://picsum.photos/seed/picsum/200/300"} className='w-8 h-8 xl:w-10 xl:h-10 rounded-full' width={"30"} height={"30"} alt="profile" />
        </div>
        
        <div className="relative inline-flex w-fit mx-auto">
          <div
            className="absolute bottom-0 left-auto right-0 top-auto z-10 inline-block -translate-x-0 translate-y-0 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-red-500 font-semibold px-1 text-xs text-white">5
          </div>
          <Image src={"https://picsum.photos/seed/picsum/200/300"} className='w-8 h-8 xl:w-10 xl:h-10 border-[3px] border-blue-500 p-[0.15rem]  rounded-full' width={"30"} height={"30"} alt="profile" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar