import './projectCard.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const ProjectCard = ({projectName, projectProgress, projectDescription, projectTotalTasks, projectCompletedTask, projectId }) => {
return(
   <Link
      to={`/projectsboard/${projectId}`}>
   <div className="project-card-container">
    <header className='card-header'>
     <h1 className="project-name">{projectName}</h1><p className="project-progress">{projectProgress}</p>
     </header>
     <p className="project-Description">{projectDescription}</p>
     <section className='total-completed-tasks'>
     <footer className='total-container'>
        <h3 className="total-tasks">{projectTotalTasks}</h3>
        <p className='total-label'>Total Tasks</p>
     </footer> 
     <footer>
        <h3 className="completed-tasks">{projectCompletedTask}</h3>
        <p className='complete-label'>Completed Tasks</p>
     </footer>
     </section>
     <p className="project-Id">{projectId}</p>
   </div>
   </Link>
)
}
export default ProjectCard