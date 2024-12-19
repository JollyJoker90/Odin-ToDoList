const TaskCard = (task) => {
  const container = document.createElement("div");
  container.classList.add("card");
  const checkboxBtn = document.createElement("button");
  checkboxBtn.classList.add("btn", "checkbox");
  const title = document.createElement("div");
  title.textContent = task.title;
  container.append(checkboxBtn, title);

  checkboxBtn.addEventListener("click", (e) => {
    e.target.classList.toggle("checked");
  });

  return container;
};

export default TaskCard;
