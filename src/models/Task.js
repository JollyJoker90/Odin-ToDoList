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

export default Task;
