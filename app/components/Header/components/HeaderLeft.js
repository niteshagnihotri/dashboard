"use client"
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsBoxArrowInRight } from 'react-icons/bs';
import {MdMic} from 'react-icons/md';

const HeaderLeft = () => {
    return (
        <div className='flex justify-between lg:space-x-3 xl:space-x-8 items-center'>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FiSearch className='text-gray-400' />
                </div>
                <input type="search" id="search" className="block w-48 px-4 py-3 pl-10 text-sm focus:outline-none text-gray-900 shadow-sm border rounded-md placeholder:text-xs placeholder:font-semibold placeholder:tracking-tight" placeholder="Search Tasks" />

                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <BsBoxArrowInRight className='text-gray-400 text-lg font-semibold' />
                </div>
            </div>
            <div>
                <MdMic className='text-gray-400 text-xl font-semibold' />
            </div>
        </div>
    )
}

export default HeaderLeft