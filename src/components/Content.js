import StateManager from "../state/State";
import TaskCard from "./TaskCard";

const Content = () => {
  document.querySelector("#content").innerHTML = "";
  const container = document.createElement("div");
  container.classList.add("container", "project-container");

  const state = StateManager.getState();

  const heading = document.createElement("h1");
  heading.textContent = state.projects[0].name;

  container.append(heading);

  state.projects[0].getTasks().forEach((task) => {
    container.append(TaskCard(task));
  });

  return container;
};

const RenderContent = () => {
  document.querySelector("#content").append(Content());
};
export { Content, RenderContent };
