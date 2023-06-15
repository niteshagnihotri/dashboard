import React from 'react'
import CardHeading from '../CardHeading'
import Card from '../Card'
import AddCard from '../AddCard'

const Progress = () => {
    return (
        <div className='space-y-5'>
            <CardHeading title={"In Progress"} count={"4"} />
            <Card title={"Create calender, chat and email add pages"} />
            <AddCard/>
        </div>
    )
}

export default Progress