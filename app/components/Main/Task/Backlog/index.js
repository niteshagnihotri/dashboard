import React from 'react'
import CardHeading from '../CardHeading'
import Card from '../Card'
import AddCard from '../AddCard'

const Backlog = () => {
    return (
        <div className='space-y-5'>
            <CardHeading title={"Backlog Tasks"} count={"4"}/>
            <Card title="Model Answer"/>
            <Card title={"Create calender, chat and email add pages"} />
            <Card title={"Product Design, Figma, Sketch, Prototype"}/>
            <Card title={"Change Email Option Process"}/>
            <AddCard/>
        </div>
    )
}

export default Backlog