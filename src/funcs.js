const Task = (() => {
  let taskCounter = 0;
  return (title, description, dueDate, priority) => {
    taskCounter += 1;
    return {
      id: taskCounter,
      title,
      description,
      dueDate,
      priority,
      project: "default",
    };
  };
})();

const Project = (name) => {
  const tasks = [];
  let isActive = false;
  const addTask = (task) => {
    tasks.push(task);
  };
  const removeTask = (taskID) => {
    tasks.filter((task) => task.id !== taskID);
  };
  const getTasks = () => tasks;
  const getName = () => name;
  const setActive = () => (isActive = true);
  const setInactive = () => (isActive = false);
  const getIsActive = () => isActive;
  return {
    addTask,
    removeTask,
    getTasks,
    getName,
    setActive,
    setInactive,
    getIsActive,
  };
};

export { Task, Project };
