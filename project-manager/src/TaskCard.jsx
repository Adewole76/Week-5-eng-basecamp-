import './taskCard.css'
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
const TaskCard = ({taskName, taskStatus, taskPriority, taskDescription}) => {
    return(
        <div className="task-cards">
            <header className='task-head-section'>
            <h4>{taskName}</h4>
            <section>
            <MdDeleteForever size={20} className='icon'></MdDeleteForever>
            <CiEdit size={20} className='icon'></CiEdit>
            </section>
            </header>
            <footer>
            <p className='priority'>{taskStatus}</p>
            <p>{taskPriority}</p>
            </footer>
            <article>{taskDescription}</article>
        </div>
    )
}
export default TaskCard