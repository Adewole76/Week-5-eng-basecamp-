import TaskCard from '../src/TaskCard.jsx'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { useState } from 'react'
import Modal from 'react-modal'
import { firstProjectContext } from '../Context/ProjectContext.jsx'
import { IoAddCircle } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";
Modal.setAppElement('#root')
const ProjectBoard = () => {
    const [TaskmodalToggle, setTaskModalToogle] = useState(false);
    const {id} = useParams();
    console.log('id from useParams:', id);
    const {addTask, ProjectsArray} = useContext(firstProjectContext);
    console.log(ProjectsArray);
    const Project = ProjectsArray.find((project) => project.projectId === id);
    console.log(Project);
    // const testTasks = [
    //     {
    //         id: '1',
    //         name: 'Build component' ,
    //         priority: 'high',
    //         status: 'todo',
    //         taskdescription: 'build a navbar component with a hamburger menu'
    //     }
    // ]
    const addButtonListenerFunction = () =>{
        setTaskModalToogle(true)
    }
return(
    <main className='projects-main'>
        <h1>{Project.projectName}</h1> 
        <button onClick={() => addButtonListenerFunction()}>Add Task <IoAddCircle></IoAddCircle></button>
        <Modal isOpen = {TaskmodalToggle} onRequestClose = {() => setTaskModalToogle(false)}>
          <h2>Add a Task to this Project</h2>
        <IoMdCloseCircle onClick={() => setTaskModalToogle(false)}></IoMdCloseCircle>
        <label htmlFor="">
        Task Name
        <input type="text"  placeholder='Task Name'/>
        </label>

        <label htmlFor="">
            Description
            <textarea name="" id="" cols="30" rows="10" placeholder='short description for task'></textarea>
        </label>

        <label htmlFor="">
            <select name="" id="">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
        </label>
        </Modal>
    </main>
)
}
export default ProjectBoard
