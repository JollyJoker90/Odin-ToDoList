import "./style.css";
import StateManager from "./state/State";
import { RenderSidebar } from "./components/Sidebar";
import Project from "./models/Project";
import { RenderContent } from "./components/Content";
import Task from "./models/Task";

const defaultProject = Project("Default");
StateManager.setState({ projects: [defaultProject] });

// Testing
const tempTasks = ["test1", "test2", "test3"];
const state = StateManager.getState();
tempTasks.forEach((task) => {
  state.projects[0].addTask(Task(task));
});
StateManager.setState({ projects: [...state.projects] });
// Testing end

StateManager.subscribe((newState) => {
  RenderSidebar();
  RenderContent();
});

RenderContent();
RenderSidebar();

window.StateM = StateManager;
