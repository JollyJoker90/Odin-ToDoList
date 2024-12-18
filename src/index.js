import "./style.css";
import { Task, Project } from "./funcs";
import { UpdateScreen, Modal, UpdateSidebar } from "./gui";

const AppManager = () => {
  const projects = [];
  const defaultProject = Project("Me");
  // for testing
  defaultProject.addTask(Task("test", "Desc. This is a desc", "1.1.10", "low"));
  defaultProject.addTask(
    Task("test2", "Desc. This is a desc", "1.1.10", "mid")
  );
  defaultProject.addTask(
    Task("test3", "Desc. This is a desc", "1.1.10", "high")
  );
  // end testing
  projects.push(defaultProject);
  return { projects };
};

const ScreenManager = () => {
  const app = AppManager();
  UpdateScreen(app.projects);
  UpdateSidebar(app.projects);

  const handleAddTask = (e) => {
    Modal(e);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Escape" && document.querySelector("#taskModal")) {
      console.log("Test");
    }
  };

  document.querySelector(".add-task").addEventListener("click", handleAddTask);
  document.addEventListener("taskAdded", (event) => {
    const { title, category } = event.detail;
    const newTask = Task(title, `Task categor`);
    app.projects[0].addTask(newTask);
    UpdateScreen(app.projects);
  });
  document.addEventListener("keydown", handleKeyPress);
  return { app };
};

const test = ScreenManager();
// screen.renderContent();

// test.app.projects[0].tasks.addTask("test");

window.test = test;
