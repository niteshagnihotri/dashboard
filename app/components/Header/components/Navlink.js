import Link from 'next/link'
import React from 'react'

const Navlink = ({ value }) => {
    return (
        <Link href={""}>
            <h1 className='text-xs text-gray-400 font-semibold hover:text-gray-500'>{value}</h1>
        </Link>
    )
}

export default Navlink