import { useContext } from "react"
import { firstContext } from "../Context/AuthContext"
import '../src/Dashboard.css'
import { FaUserCircle } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { IoAddCircle } from "react-icons/io5";
import StatCard from "../src/StatCard";
import { FaClipboardList } from "react-icons/fa";
import { IoMdTimer } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import ProjectCard from "../src/ProjectCard";
import { useState } from "react";
const DashBoard = () => {
   console.log('dashboard is rendering')
   const {currentUser} = useContext(firstContext);
   console.log('current', currentUser)
 return(
    <section className="Dash-body">
      <header className="Dash-header">
      <div>
       <h1 className="Welcome-Message">Welcome {currentUser.UserName}</h1>
       <button className="new-project-btn">New project<IoAddCircle size={25}></IoAddCircle></button>
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
    </section>
 ) 
}
export default DashBoard