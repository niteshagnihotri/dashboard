import Image from 'next/image'
import React from 'react';
import {AiOutlinePlusCircle} from 'react-icons/ai';

const HeaderRight = () => {
    return (
            <div className='flex flex-row items-center justify-end translate-x-10'>
                <Image src={"https://source.unsplash.com/random/800x800/?img=1"} className='w-10 border-2 h-10 rounded-full ' width={"30"} height={"30"} alt="profile" />
                <Image src={"https://source.unsplash.com/random/800x800/?img=2"} className='w-10 border-2 h-10 rounded-full -translate-x-4 ' width={"30"} height={"30"} alt="profile" />
                <Image src={"https://picsum.photos/200/300?random=1"} className='w-10 border-2 h-10 rounded-full -translate-x-8 ' width={"30"} height={"30"} alt="profile" />
                <Image src={"https://picsum.photos/200/300?random=2"} className='w-10 border-2 h-10 rounded-full -translate-x-12 ' width={"30"} height={"30"} alt="profile" />
                <h1 className='-translate-x-14 rounded-full bg-gray-50 text-gray-700 text-xs px-2 text-center flex items-center'>+5</h1>
                <AiOutlinePlusCircle className='p-2 text-4xl -translate-x-10 border-dashed border-2 text-gray-400 bg-white rounded-full'/>
            </div>
    )
}

export default HeaderRight