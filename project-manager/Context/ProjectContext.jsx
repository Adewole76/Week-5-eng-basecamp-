import { createContext, Component } from "react";
import { useState } from "react";
import { useEffect } from "react";
export const firstProjectContext = createContext();
const ProjectContextProvider = ({children}) => {
  const [ProjectsArray, setProjectsArray] = useState([])
  let projectExample = {
    id: 1,
    name: 'design website',
    description: 'Create a website with intuitive design',
    tasks: [
    ]
  }
  useEffect(() => {
  const savedProjectsArray = localStorage.getItem('projects')
  let loadedProjects = !savedProjectsArray ? []:JSON.parse(savedProjectsArray)
  setProjectsArray(loadedProjects);
  },[])
  let taskExample = {
    id: 1,
    title: 'Desgin Mockups',
    description: 'Create wireFrames in Figma',
    Status: 'todo',
    priority: 'high',
  }
 
  // add task to project task array
  const addTask = (name, description) => {
     const newTask = {
      taskId: crypto.randomUUID(),
      taskName: name,
      taskDescription: description,
      taskStatus: 'not Started'
     }
     
  }
  const addProject = (name, description) => {
   const newProject = {
    projectId: crypto.randomUUID(),
    projectName: name,
    projectDescription: description,
    createdAt: new Date().toISOString(),
    projectStatus: 'Not StartedS',
    tasks: []
   }
   const updatedProjectsArray = [...ProjectsArray, newProject]
    
    setProjectsArray(updatedProjectsArray)
    localStorage.setItem('projects', JSON.stringify(updatedProjectsArray));
  }
  const updateTask = () => {
    let replacementTask = Object.create(taskExample)
  }
  const deleteTask = () => {

  }
    return(
      <firstProjectContext.Provider value={{addTask, addProject, updateTask, deleteTask }}>
        {children}
      </firstProjectContext.Provider>
    )
}
export default ProjectContextProvider