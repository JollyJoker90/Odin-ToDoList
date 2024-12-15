import "./style.css";

class ToDo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

class Test {
  constructor(test) {
    this.test = test;
  }
}

function Help(name) {
  return { name };
}

window.ToDo = ToDo;

console.log(new ToDo("help", "est2", "1.1", "low"));

// export { ToDo };
