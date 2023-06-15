import React from 'react';
import Image from 'next/image';
import { LuChevronsUpDown } from 'react-icons/lu';

const Profile = () => {
    return (
        <div className="flex w-full flex-row justify-between items-center xl:space-x-4 py-5 px-7 lg:px-4 xl:px-8 border-b">
            <div className='flex flex-row flex-shrink-0 items-center space-x-3 md:space-x-1 xl:space-x-3'>
                <div className='relative'>
                    <Image src={"https://picsum.photos/200"} className='object-fill w-10 h-10 border-[3px] border-blue-500  rounded-full p-[0.15rem]' width={"30"} height={"30"} alt="profile" />
                </div>
                <div className='flex flex-col space-y-1 cursor-pointer'>
                    <h5 className='text-xs font-semibold'>Nancy Martino</h5>
                    <p className='text-gray-400 text-xs'>Designer</p>
                </div>
            </div>
            <div>
                <LuChevronsUpDown className='text-blue-500 font-bold' />
            </div>
        </div>
    )
}

export default Profile