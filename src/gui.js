const UpdateScreen = (projects) => {
  // updating content area
  document.querySelector("#content").innerHTML = "";
  document.querySelector("#content").append(RenderProject(projects[0]));
  // updating sidebar
};

const UpdateSidebar = (projects) => {
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
  const addProjectBtn = document.createElement("button");
  addProjectBtn.classList.add("btn", "add-project");
  addProjectBtn.textContent = "Add project";

  operatorsContainer.append(addTaskBtn, addProjectBtn);
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

const Modal = ({ target, pageX, pageY }, type) => {
  console.log(type);
  target.disabled = true;
  const categories = ["Self", "other"];
  const modalContainer = document.createElement("div");
  modalContainer.id = type === "task" ? "taskModal" : "projectModal";
  modalContainer.classList.add("modal");
  modalContainer.style.left = pageX + 24 + "px";
  modalContainer.style.top = pageY + 24 + "px";

  const modalInput = document.createElement("span");
  modalInput.contentEditable = "true";

  const modalCategorySelect = document.createElement("select");
  if (type === "task") {
    categories.forEach((category) => {
      const option = document.createElement("option");
      option.textContent = category;
      modalCategorySelect.append(option);
    });
  }

  const modalSubmit = document.createElement("button");
  modalSubmit.classList.add("btn", "save-modal");
  modalSubmit.textContent = "Save";

  const lowerContainer = document.createElement("div");
  lowerContainer.classList.add("modal-bottom-container");
  if (type === "task") {
    lowerContainer.append(modalCategorySelect, modalSubmit);
  } else {
    lowerContainer.append(modalSubmit);
  }

  modalContainer.append(modalInput, lowerContainer);
  document.querySelector("body").append(modalContainer);
  modalInput.focus();

  const closeModal = () => {};

  modalSubmit.addEventListener("click", () => {
    const taskData = {
      title: modalInput.textContent.trim(),
      category: modalCategorySelect.value,
    };

    if (taskData.title) {
      document.querySelector("body").removeChild(modalContainer);
      target.disabled = false;

      const event = new CustomEvent("taskAdded", { detail: taskData });
      document.dispatchEvent(event);
    } else {
      alert("Nothing to save..");
    }
  });
  // console.log(target, pageX, pageY);
  return { closeModal };
};

export { UpdateScreen, UpdateSidebar, Modal };
