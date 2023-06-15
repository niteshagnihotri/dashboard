"use client"
import React from 'react'
import Backlog from './Backlog'
import Todo from './Todo'
import Progress from './Progress'
import Done from './Done'

const Task = () => {
  return (
    <div className='grid gap-y-5 gap-x-0 md:grid-cols-2 md:gap-8 xl:grid-cols-4 xl:gap-8'>
        <Backlog/>
        <Todo/>
        <Progress/>
        <Done/>
    </div>
  )
}

export default Task