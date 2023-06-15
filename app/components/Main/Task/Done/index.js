import React from 'react'
import CardHeading from '../CardHeading'
import Card from '../Card'
import AddCard from '../AddCard'

const Done = () => {
    return (
        <div className='space-y-5'>
            <CardHeading title={"Done"} count={"5"} />
            <Card title={"Model Answer"}/>
            <Card title={"Create calender, chat and email add pages"} />
            <Card title={"Product Design, Figma, Sketch, Prototype"}/>
            <Card title={"Model Answer"}/>
            <AddCard/>
        </div>
    )
}

export default Done