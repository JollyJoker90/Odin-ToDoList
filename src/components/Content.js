import StateManager from "../state/State";
import TaskCard from "./TaskCard";

const Content = () => {
  document.querySelector("#content").innerHTML = "";
  const state = StateManager.getState();
  const container = document.createElement("div");
  container.classList.add("container");

  state.projects.forEach((project) => {
    // console.log(project);
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project-container");

    const heading = document.createElement("h1");
    heading.textContent = project.name;

    projectContainer.append(heading);

    project.getTasks().forEach((task) => {
      projectContainer.append(TaskCard(task));
    });
    container.append(projectContainer);
  });

  return container;
};

const RenderContent = () => {
  document.querySelector("#content").append(Content());
};
export { Content, RenderContent };
