import React from 'react'
import CardHeading from '../CardHeading'
import Card from '../Card'
import AddCard from '../AddCard'

const Todo = () => {
    return (
        <div className='space-y-5'>
            <CardHeading title={"Todo Tasks"} count={"4"} />
            <Card title="Model Answer"/>
            <Card title={"Add authentication"}/>
            <AddCard/>
        </div>
    )
}

export default Todo