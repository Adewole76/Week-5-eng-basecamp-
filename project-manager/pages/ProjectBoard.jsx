import TaskCard from '../src/TaskCard.jsx'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { useState } from 'react'
import Modal from 'react-modal'
import '../src/projectBoard.css'
import { firstProjectContext } from '../Context/ProjectContext.jsx'
import { IoAddCircle } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";
Modal.setAppElement('#root')
const ProjectBoard = () => {
    const [TaskmodalToggle, setTaskModalToogle] = useState(false);
    const [taskNameInputvalue, setTaskNameInput] = useState('')
    const [taskDescriptionValue, setTaskDescription] = useState('')
    const [prioritydropdownvalue, setPriorityValue] = useState('')
    const [updateTaskNameInput, setUpdateTasknameValue] = useState('')
    const [updateTaskDescription, setupdateTaskDescription] = useState('')
    const [updateTaskPriority, setUpdateTaskPriorty] = useState('')
    const {id} = useParams();
    console.log('id from useParams:', id);
    const {addTask, ProjectsArray, updateTask, updateTaskModalToggle, setUpdateTaskModal} = useContext(firstProjectContext);
    console.log(ProjectsArray);
    const Project = ProjectsArray.find((project) => project.projectId === id);
    console.log(Project);
    const customStyles = {
        content: {
          top: '50%',
          right: 'auto',
          left: '50%',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '800px', 
          maxWidth: '90vw', 
        },
          overlay: {
            zIndex: 1000,
            backgroundColor: 'rgba(0, 0, 0, 0.4)' // Set a high z-index value
          },
        
      };
    // const testTasks = [
    //     {
    //         id: '1',
    //         name: 'Build component' ,
    //         priority: 'high',
    //         status: 'todo',
    //         taskdescription: 'build a navbar component with a hamburger menu'
    //     }
    // ]
    const handlePriorityChange = (event) => {
      setPriorityValue(event.target.value);
    }
    const handleTaskInputChange = (event) => {
        setTaskNameInput(event.target.value)
    }
    const handletasKDescriptionchange = (event) => {
        setTaskDescription(event.target.value)
    }

    const addButtonListenerFunction = () =>{
        setTaskModalToogle(true)
    }
    const handletaskModalSubmit = (e) => {
        e.preventDefault();
        addTask(taskNameInputvalue, taskDescriptionValue, prioritydropdownvalue, id)
        setTaskDescription('')
        setTaskNameInput('')
        setPriorityValue('')
        setTaskModalToogle(false) 
    }
    const handleTaskUpdateModalSubmit = () => {
        e.preventDefault();
        updateTask()
    }
return(
    <main className='projects-main'>
       <section className='project-main-header'>
        <h1 className='projectboard-name'>{Project.projectName}</h1> 
        <button className='addTask-btn' onClick={() => addButtonListenerFunction()}>Add Task <IoAddCircle></IoAddCircle></button>
        </section>
        <Modal isOpen = {TaskmodalToggle} onRequestClose = {() => setTaskModalToogle(false)}>
        <header className='section-header'>
          <h2>Add a Task to this Project</h2>
        <IoMdCloseCircle onClick={() => setTaskModalToogle(false)}></IoMdCloseCircle>
        </header>
        <form action="" onSubmit={handletaskModalSubmit}>
        <label htmlFor="">
        Task Name
        <input type="text" 
        onChange={handleTaskInputChange}
        value={taskNameInputvalue}  placeholder='Task Name'/>
        </label>

        <label htmlFor="">
            Description
            <textarea value={taskDescriptionValue}
            onChange ={handletasKDescriptionchange}
            name="" id="" cols="30" rows="10" placeholder='short description for task'></textarea>
        </label>

        <label htmlFor="">
            <select value={prioritydropdownvalue} onChange={handlePriorityChange}name="" id="">
                <option value="">Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
        </label>
        <button type='submit'>Add Task</button>
        </form>
        </Modal>
   {Project.tasks.map(task => {
    return <TaskCard
    taskName={task.taskName}
    taskDescription={task.taskDescription}
    taskPriority = {task.taskPriority}
    taskStatus = 'todo'
    taskID={task.taskId}
    >
    </TaskCard>
   })}
   <Modal style={customStyles} isOpen ={updateTaskModalToggle} onRequestClose={() => setUpdateTaskModal(false)}>
     <form action="">
        <section className='Header-closebtn'>
     <h4>Update Current Task</h4>
     <IoMdCloseCircle onClick={() => setUpdateTaskModal(false)}></IoMdCloseCircle>
     </section>
    <label htmlFor="">
        Name
        <input type="text" />
    </label>

    <label htmlFor="">
        Description
        <input type ="text"></input>
    </label>
    <label htmlFor="">
            <select name="" id="">
                <option value="">Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
        </label>
    <button className="edit-Task-btn">Edit Task</button>
     </form>
   </Modal>
    </main>
)
}
export default ProjectBoard
