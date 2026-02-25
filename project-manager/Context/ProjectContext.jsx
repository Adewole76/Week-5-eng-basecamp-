import { createContext, Component } from "react";

export const firstProjectContext = createContext();
const ProjectContextProvider = ({children}) => {
  let ProjectsArray = [];
  let projectExample = {
    id: 1,
    name: 'design website',
    description: 'Create a website with intuitive design',
    tasks: [
    ]
  }
  let taskExample = {
    id: 1,
    title: 'Desgin Mockups',
    description: 'Create wireFrames in Figma',
    Status: 'todo',
    priority: 'high',
  }
  // add task to project task array
  const addTask = () => {
  let Task = Object.create(taskExample);
  }
  const addProject = () => {
    let project = Object.create(projectExample);
    ProjectsArray.push(project)
    localStorage.setItem('projects', JSON.stringify(ProjectsArray));
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