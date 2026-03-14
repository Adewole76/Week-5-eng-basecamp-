import './taskCard.css'
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useState } from 'react';
import { useContext } from 'react';
import { firstProjectContext } from '../Context/ProjectContext';
import { IoConstructOutline } from 'react-icons/io5';
const TaskCard = ({taskName, taskStatus, taskPriority, taskDescription, taskID}) => {
const {updateTaskModalToggle, setUpdateTaskModal, handleFindid} = useContext(firstProjectContext)     

    return(
        <div className="task-cards">
            <header className='task-head-section'>
            <h4>{taskName}</h4>
            <section>
            <MdDeleteForever size={20} className='icon'></MdDeleteForever>
            <CiEdit onClick={() => handleFindid(taskID)}  size={20} className='icon'></CiEdit>
            </section>
            </header>
            <footer>
            <p className='priority'>{taskStatus}</p>
            <p>{taskPriority}</p>
            </footer>
            <article>{taskDescription}</article>
            <p style={{
                display: "none"
            }}>{taskID}</p>
        </div>
    )
}
export default TaskCard