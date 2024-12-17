// import EmptyCircle from "./res/checkbox-blank-circle-outline.svg";

const UpdateScreen = (projects) => {
  // updating content area
  document.querySelector("#content").innerHTML = "";
  document.querySelector("#content").append(RenderProject(projects[0]));
  // updating sidebar
  RenderSidebar(projects);
  const test = document.createElement("div");
  document.querySelector("#sidebar").append(test);
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
// const BuildTaskCard = ({ title, description, dueDate, priority, id }) => {
//   const card = document.createElement("button");
//   card.classList.add("card", `id-${id}`);
//   const cardTitle = document.createElement("div");
//   cardTitle.textContent = title;
//   const cardDescription = document.createElement("div");
//   cardDescription.textContent = description;
//   const cardDueDate = document.createElement("div");
//   cardDueDate.textContent = dueDate;
//   const cardPriority = document.createElement("div");
//   cardPriority.textContent = priority;
//   //   card.textContent = "task.name";
//   card.append(cardTitle, cardDescription, cardDueDate, cardPriority);
//   return card;
// };

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

export { UpdateScreen };
