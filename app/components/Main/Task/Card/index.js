import React from 'react'
import { BsFillFileCheckFill, BsFillFileEarmarkPlayFill, BsFillChatLeftDotsFill } from 'react-icons/bs';
import Image from 'next/image';
import {AiOutlinePlusCircle} from 'react-icons/ai';

const Card = ({title}) => {
    return (
        <div className="flex flex-col w-full max-h-fit font-Poppins overflow-hidden rounded-lg shadow-sm bg-white py-5 px-4 space-y-5">
            <div className="flex flex-row justify-between items-start">
                <h1 className='text-[0.8rem] sm:text-xs text-gray-500 font-semibold font-Poppins tracking-tight pr-2'>{title}</h1>
                <div className="flex flex-row items-center space-x-2 text-blue-400">
                    <BsFillFileCheckFill />
                    <span className='text-xs text-blue-500'>4</span>
                </div>
            </div>
            <div className='space-x-1 font-semibold '>
                <button className="text-[0.6rem] px-2 py-1 border rounded-full">#UI007</button>
                <button className="text-[0.6rem] px-2 py-1 bg-blue-100 rounded-full text-blue-600">Design</button>
                <button className="text-[0.6rem] px-2 py-1 bg-orange-200 rounded-full text-orange-500">Backlog</button>
            </div>
            <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center'>
                    <Image src={"https://source.unsplash.com/random/800x800/?img=1"} className='w-8 border-2 h-8 rounded-full ' width={"30"} height={"30"} alt="profile" />
                    <Image src={"https://source.unsplash.com/random/800x800/?img=2"} className='w-8 border-2 h-8 rounded-full -translate-x-4 ' width={"30"} height={"30"} alt="profile" />
                    <Image src={"https://picsum.photos/200/300?random=1"} className='w-8 border-2 h-8 rounded-full -translate-x-8 ' width={"30"} height={"30"} alt="profile" />
                    <AiOutlinePlusCircle className='p-1 text-2xl -translate-x-10 border-dashed border-2 text-gray-300 bg-white rounded-full'/>
         
                </div>
                <div>
                    <div className="flex flex-row items-center space-x-2">
                        <BsFillFileEarmarkPlayFill className='text-violet-600'/>
                        <span className='text-xs text-blue-500'>4</span>
                        <BsFillChatLeftDotsFill className="text-yellow-500" />
                        <span className='text-xs text-blue-500'>4</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card