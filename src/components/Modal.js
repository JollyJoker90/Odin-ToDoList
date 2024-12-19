const Modal = ({ onSave }, { pageX, pageY, target: { value } }) => {
  const sidebarBtns = document.querySelectorAll(".sidebar-container > button");
  sidebarBtns.forEach((btn) => {
    btn.disabled = true;
  });
  const container = document.createElement("div");
  container.classList.add("modal");
  container.style.top = pageY + "px";
  container.style.left = pageX + "px";

  const input = document.createElement("input");
  input.placeholder = `${value} title`;

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";

  saveBtn.addEventListener("click", () => {
    if (input.value.trim()) {
      onSave(input.value);
      sidebarBtns.forEach((btn) => {
        btn.disabled = false;
      });
      container.remove();
    } else {
      alert("Title can not be empty");
    }
  });
  container.append(input, saveBtn);
  document.body.append(container);
  input.focus();
};

export default Modal;
