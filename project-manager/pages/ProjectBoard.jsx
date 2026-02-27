import TaskCard from '../src/TaskCard.jsx'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { useState } from 'react'
const ProjectBoard = () => {
    const testTasks = [
        {
            id: '1',
            name: 'Build component' ,
            priority: 'high',
            status: 'todo',
            taskdescription: 'build a navbar component with a hamburger menu'
        }
    ]
return(
    <main className='projects-main'>
        {testTasks.map(task => {
            return <TaskCard
            key= {task.id}
            taskName={task.name}
            taskStatus={task.status}
            taskPriority ={task.priority}
            taskDescription = {task.taskdescription}
            ></TaskCard>
        })}
    </main>
)
}
export default ProjectBoard
