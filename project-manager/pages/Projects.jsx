import { useContext } from 'react'
import '../src/projects.css'
import { firstProjectContext }from '../Context/ProjectContext'
import ProjectCard from '../src/ProjectCard.jsx'
const ProjectsProject = () => {
  const {ProjectsArray} = useContext(firstProjectContext)
  return(
    <section className='Project-section-page'>
    <h1>View all Your Projects</h1>
    {ProjectsArray.map(project => {
      return <ProjectCard
       projectName={project.projectName}
       projectDescription = {project.projectDescription}
       projectCompletedTask = {project.tasks.length}
       projectTotalTasks={project.tasks.length}
       projectProgress = {project.projectStatus}
       projectId ={project.projectId}
       ></ProjectCard>
     })}
    </section>
  )
}
export default ProjectsProject