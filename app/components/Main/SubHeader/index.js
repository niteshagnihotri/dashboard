import React from 'react';
import { AiOutlineAppstore, AiOutlineMenu, AiTwotoneLock, AiOutlineFileAdd } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import { BsTwitter } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { RiMenu2Line, RiMenu3Fill, RiAppsFill } from 'react-icons/ri';
import { BiHelpCircle } from 'react-icons/bi';


const SubHeader = () => {
    return (
        <div className='flex flex-row flex-wrap flex-shrink grid-flow-row gap-3 justify-start sm:justify-between text-xs py-8 text-gray-500 font-Public font-semibold '>
            <div className='flex flex-row'>
                <div className='flex flex-row flex-shrink-0 items-center space-x-2 p-2 px-3 border rounded-sm shadow-sm '>
                    <AiOutlineAppstore />
                    <h1 className='cursor-pointer'>Board View</h1>
                </div>
                <div className='flex flex-row flex-shrink-0 items-center space-x-2 p-2 px-3 border rounded-sm shadow-sm bg-white'>
                    <AiOutlineMenu />
                    <h1 className='cursor-pointer'>Board View</h1>
                </div>
            </div>
            <div className='flex flex-row flex-shrink-0 items-center px-3 text-gray-400'>
                <AiTwotoneLock className='text-xl ' />
                <h1 className='font-semibold px-2'>Limited Access</h1>
                <IoIosArrowDown />
            </div>
            <div className='flex items-center flex-shrink sm:flex-shrink-0 sm:flex-nowrap space-x-3 sm:space-x-5'>
                <h1 className='font-semibold text-gray-400'>Owners</h1>
                <BsTwitter className='text-xl rounded-full text-blue-500 bg-white p-1' />
                <h1>Twitter Team</h1>
            </div>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FiSearch className='text-gray-400' />
                </div>
                <input type="search" id="search" className="block w-48 focus:outline-none px-4 py-2 pl-10 text-sm text-gray-900 shadow-sm border rounded-md placeholder:text-xs placeholder:font-semibold placeholder:tracking-tight" placeholder="Search Tasks" />
            </div>
            <div className='flex flex-row space-x-2 items-center'>
                <AiOutlineFileAdd className='px-1 hover:text-gray-400 cursor-pointer rounded-md bg-white text-gray-300 text-3xl'/>
                <RiMenu2Line className='px-1 hover:text-gray-400 cursor-pointer rounded-md bg-white text-gray-300 text-3xl'/>
                <RiMenu3Fill className='px-1 hover:text-gray-400 cursor-pointer rounded-md bg-white text-gray-300 text-3xl'/>
                <BiHelpCircle className='px-1 hover:text-gray-400 cursor-pointer rounded-md bg-white text-gray-300 text-3xl'/>
                <RiAppsFill className='px-1 hover:text-gray-400 cursor-pointer rounded-md bg-white text-gray-300 text-3xl'/>
            </div>
        </div>
    )
}

export default SubHeader