const Task = (() => {
  let taskCounter = -1;
  return (title, description, dueDate, priority, status) => {
    taskCounter += 1;
    return {
      id: taskCounter,
      title,
      description,
      dueDate,
      priority,
      status,
      project: "default",
    };
  };
})();

const Project = (() => {
  let projectCounter = -1;
  return (name) => {
    const tasks = [];
    projectCounter++;
    const addTask = (task) => {
      tasks.push(task);
    };
    const removeTask = (taskID) => {
      tasks.filter((task) => task.id !== taskID);
    };
    const getTasks = () => tasks;
    const getName = () => name;
    return {
      id: projectCounter,
      addTask,
      removeTask,
      getTasks,
      getName,
    };
  };
})();

export { Task, Project };
