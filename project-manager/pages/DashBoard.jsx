import { useContext } from "react"
import { firstContext } from "../Context/AuthContext"
import '../src/Dashboard.css'
import { FaUserCircle } from "react-icons/fa";
import { FaBlackTie, FaUser } from "react-icons/fa6";
import { IoAddCircle } from "react-icons/io5";
import StatCard from "../src/StatCard";
import { FaClipboardList } from "react-icons/fa";
import { IoMdTimer } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import ProjectCard from "../src/ProjectCard";
import { useState } from "react";
import Modal from 'react-modal'
import { IoMdCloseCircle } from "react-icons/io";
import { firstProjectContext } from "../Context/ProjectContext";
Modal.setAppElement('#root')
const DashBoard = () => {
  const [modalToggle, setModalToogle] = useState(false); 
   console.log('dashboard is rendering')
   const {currentUser} = useContext(firstContext);
   const [nameInput, setnameInput] = useState('');
   const [descriptioncontent, setDescriptionContent] = useState('');
   const{addProject, ProjectsArray} = useContext(firstProjectContext)
   const handlenameChange = (event) => {
    setnameInput(e.target.value)
   }
   const handledescriptionChange = () => {
    setDescriptionContent(e.target.value);
   }
   console.log('current', currentUser)
   const customStyles = {
    content: {
      top: '50%',
      right: 'auto',
      left: '50%',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '800px', // Set your desired width here
      maxWidth: '90vw', // Optional: for responsiveness
    },
      overlay: {
        zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 0.4)' // Set a high z-index value
      },
    
  };
 return(
    <section className="Dash-body">
      <header className="Dash-header">
      <div>
       <h1 className="Welcome-Message">Welcome {currentUser.UserName}</h1>
       <button onClick={() => setModalToogle(true)} className="new-project-btn">New project<IoAddCircle size={25}></IoAddCircle></button>
       </div>
       <section>
       <p className="user-Email-Avatar">{currentUser.Email}</p>
       <FaUserCircle className="user-Avatar" size={30}></FaUserCircle>
       </section>
       </header>
   <h1 className="tasks-heading">Tasks Overview</h1>    
  <section className="stat-card-section">
   <StatCard 
   cardLabel="To do"
   cardIcon={<FaClipboardList size={35}></FaClipboardList>}
   totalCount='2'
   ></StatCard>
   <StatCard
   cardLabel="In-Progress"
   cardIcon={<IoMdTimer size={35}></IoMdTimer>}
   totalCount='2'
   ></StatCard>
   <StatCard
   cardLabel="Done"
   cardIcon={<FaCheckCircle size={35}></FaCheckCircle>}
   totalCount='2'
   ></StatCard>
  </section>
  <h1 className="projects-heading">Recent Projects</h1>
  <section className="project-cards-section">
    {ProjectsArray.map(project => {
      <ProjectCard
      projectName={project.projectName}
      projectDescription = {project.projectDescription}
      projectCompletedTask = {project.tasks.length}
      projectTotalTasks={project.tasks.length}
      projectProgress = {project.projectStatus}
      ></ProjectCard>
    })}
    <ProjectCard projectName="Design dash"
    projectProgress="Completed"
    projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
     projectCompletedTask="73"
     projectTotalTasks="34"
     projectId ="24"
    ></ProjectCard>
    <ProjectCard
    projectName="Design dash"
    projectProgress="Completed"
    projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
     projectCompletedTask="73"
     projectTotalTasks="34"
     projectId ="24"
    ></ProjectCard>
    <ProjectCard
    projectName="Design dash"
    projectProgress="Completed"
    projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
     projectCompletedTask="73"
     projectTotalTasks="34"
     projectId ="24"
    ></ProjectCard>
  </section>
  <Modal style={customStyles} isOpen = {modalToggle} onRequestClose={() => setModalToogle(false)}>
    <header className="top-of-modal">
    <h3>Create a new project</h3>
   <IoMdCloseCircle onClick={() => setModalToogle(false)}></IoMdCloseCircle>
    </header>
   <form className="new-project-form" >
    <label htmlFor="">
      Project Name
      <input onChange={() => handlenameChange(e)} type="text" placeholder="project-name" />
    </label>

<label htmlFor="">
  Description
  <textarea onChange={() => handledescriptionChange(e)} name="" id="" cols="30" rows="10"></textarea>
</label>

   </form>
   <button className="submit-btn">Submit</button>
  </Modal>
    </section>
 ) 
}
export default DashBoard