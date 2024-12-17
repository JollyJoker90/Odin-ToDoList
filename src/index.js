import "./style.css";
import { Task, Project } from "./funcs";
import { UpdateScreen } from "./gui";

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

  return { app };
};

const test = ScreenManager();
// screen.renderContent();

// test.app.projects[0].tasks.addTask("test");

window.test = test;
