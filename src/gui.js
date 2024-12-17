const UpdateScreen = (projects) => {
  // updating content area
  document.querySelector("#content").innerHTML = "";
  document.querySelector("#content").append(RenderProject(projects[0]));
  // updating sidebar
  RenderSidebar(projects);
};

const RenderProject = (project) => {
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-container");
  const projectName = document.createElement("h1");
  projectName.textContent = project.getName();
  projectContainer.append(projectName);
  project.getTasks().forEach((task) => {
    projectContainer.append(TaskCardSimple(task));
  });
  return projectContainer;
};

const TaskCardSimple = ({ title, id }) => {
  const card = document.createElement("button");
  card.classList.add("card", `id-${id}`);
  const cardCheckbox = document.createElement("button");
  cardCheckbox.classList.add("check-empty", "checkbox");
  cardCheckbox.addEventListener("click", () => {
    cardCheckbox.classList.toggle("checked");
  });
  const cardTitle = document.createElement("div");
  cardTitle.textContent = title;
  card.append(cardCheckbox, cardTitle);
  return card;
};
const TaskCardExpanded = () => {};

const RenderSidebar = (projects) => {
  const header = document.createElement("h1");
  header.classList.add("sidebar-heading");
  header.textContent = "ToDo's";
  // operator container
  const operatorsContainer = document.createElement("div");
  operatorsContainer.classList.add("container", "sidebar-operators");
  const addTaskBtn = document.createElement("button");
  addTaskBtn.classList.add("btn", "add-task");
  addTaskBtn.textContent = "Add task";

  operatorsContainer.append(addTaskBtn);
  const projectsContainer = document.createElement("div");
  projectsContainer.classList.add("container", "sidebar-projects");
  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.textContent = project.getName();
    projectsContainer.append(projectDiv);
  });
  // append and refresh everything in sidebar
  //   document.querySelector("#sidebar").innerHTML = "";
  document
    .querySelector("#sidebar")
    .append(header, operatorsContainer, projectsContainer);
};

const Modal = ({ target, pageX, pageY }) => {
  target.disabled = true;
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal");
  modalContainer.style.left = pageX + 24 + "px";
  modalContainer.style.top = pageY + 24 + "px";
  const modalSubmit = document.createElement("button");
  modalSubmit.classList.add("btn");
  modalSubmit.textContent = "Save";

  const modalInput = document.createElement("input");
  modalInput.type = "text";

  const modalSeperator = document.createElement("hr");
  modalContainer.append(modalInput, modalSeperator, modalSubmit);
  document.querySelector("body").append(modalContainer);

  // console.log(target, pageX, pageY);
};

export { UpdateScreen, Modal };
