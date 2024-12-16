const UpdateScreen = (projects) => {
  // updating content area
  document.querySelector("#content").innerHTML = "";
  document
    .querySelector("#content")
    .append(
      RenderProject(
        projects.filter((project) => project.getIsActive() === true)[0]
      )
    );
  // updating sidebar
  RenderSidebar(projects);
  const test = document.createElement("div");
  document.querySelector("#sidebar").append(test);
};

const RenderProject = (project) => {
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-container");
  project.getTasks().forEach((task) => {
    projectContainer.append(BuildTaskCard(task));
  });
  return projectContainer;
};

const BuildTaskCard = ({ title, description, dueDate, priority, id }) => {
  const card = document.createElement("div");
  card.classList.add("card", `id-${id}`);
  const cardTitle = document.createElement("div");
  cardTitle.textContent = title;
  const cardDescription = document.createElement("div");
  cardDescription.textContent = description;
  const cardDueDate = document.createElement("div");
  cardDueDate.textContent = dueDate;
  const cardPriority = document.createElement("div");
  cardPriority.textContent = priority;
  //   card.textContent = "task.name";
  card.append(cardTitle, cardDescription, cardDueDate, cardPriority);
  return card;
};

const RenderSidebar = (projects) => {
  const header = document.createElement("h1");
  header.textContent = "ToDo's";
  const addTaskBtn = document.createElement("button");
  addTaskBtn.classList.add("btn", "add-task");
  addTaskBtn.textContent = "Add task";

  const operatorsContainer = document.createElement("div");
  const projectsContainer = document.createElement("div");
  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.textContent = project.getName();
    projectsContainer.append(projectDiv);
  });
  //   document.querySelector("#sidebar").innerHTML = "";
  document
    .querySelector("#sidebar")
    .append(header, addTaskBtn, projectsContainer);
};

export { UpdateScreen };
