import StateManager from "../state/State";
import Modal from "./Modal";
import Task from "../models/Task";
import Project from "../models/Project";

const Sidebar = () => {
  const container = document.createElement("div");
  container.classList.add("container", "sidebar-container", "flex-col");

  const sidebarTitle = document.createElement("h1");
  sidebarTitle.textContent = "ToDo's";

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("container", "flex-col");
  const addTaskBtn = document.createElement("button");
  addTaskBtn.classList.add("btn");
  addTaskBtn.textContent = "Add Task";
  addTaskBtn.value = "Task";

  addTaskBtn.addEventListener("click", (event) => {
    const modal = Modal(
      {
        onSave: (taskTitle) => {
          const state = StateManager.getState();
          const defaultProject = state.projects[0];
          defaultProject.addTask(Task(taskTitle, "desc", "TBD", "low"));
          StateManager.setState({ projects: [...state.projects] });
        },
      },
      event
    );
  });

  const addProjectBtn = document.createElement("button");
  addProjectBtn.classList.add("btn");
  addProjectBtn.textContent = "Add Project";
  addProjectBtn.value = "Project";

  addProjectBtn.addEventListener("click", (event) => {
    const modal = Modal(
      {
        onSave: (projectTitle) => {
          const state = StateManager.getState();
          const newProject = Project(projectTitle);
          state.projects.push(newProject);
          StateManager.setState({ ...state });
        },
      },
      event
    );
  });

  btnContainer.append(addTaskBtn, addProjectBtn);
  container.append(sidebarTitle, btnContainer);

  return container;
};

export default Sidebar;
