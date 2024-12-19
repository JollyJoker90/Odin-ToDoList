const Project = (() => {
  let projectCounter = -1;
  return (name) => {
    const tasks = [];
    projectCounter++;
    return {
      id: projectCounter,
      name,
      addTask: (task) => tasks.push(task),
      removeTask: (taskID) => {
        const index = tasks.findIndex((task) => task.id === taskID);
        if (index > -1) tasks.splice(index, 1);
      },
      getTasks: () => tasks,
    };
  };
})();

export default Project;
