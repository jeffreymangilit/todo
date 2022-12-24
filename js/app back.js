window.addEventListener("load", () => {
  const form = document.querySelector("#taskform");
  const input = document.querySelector("#taskInput");
  const taskList = document.querySelector("#task");

  form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    CreateTask();
  });

  function CreateTask() {
    const task = input.value;

    if (!task) {
      alert("Please add a Task");
      return;
    }

    //create task Div
    const taskEl = document.createElement("div");
    taskEl.classList.add("task");

    //create content Div
    const taskContentEl = document.createElement("div");
    taskContentEl.classList.add("content");
    taskEl.appendChild(taskContentEl);

    //create checkbox inside content Div
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("form-check-input");
    taskContentEl.appendChild(checkBox);

    //create text input inside content Div
    const taskInput = document.createElement("input");
    taskInput.classList.add("text");
    taskInput.type = "text";
    taskInput.value = task;
    taskInput.setAttribute("readonly", "readonly");
    taskContentEl.appendChild(taskInput);

    //create action div
    const taskAction = document.createElement("div");
    taskAction.classList.add("action");
    taskEl.appendChild(taskAction);

    //create Edit Button inside action div
    const EditBtn = document.createElement("button");
    EditBtn.classList.add("btn");  
    EditBtn.classList.add("btn-secondary");
    EditBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    
    taskAction.appendChild(EditBtn);

    //create Delete Button inside action div
    const DelBtn = document.createElement("button");
    DelBtn.classList.add("btn");  
    DelBtn.classList.add("btn-danger");
    DelBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

    taskAction.appendChild(DelBtn);

    //create All Elements
    taskList.appendChild(taskEl);
    input.value = "";

    EditBtn.addEventListener("click", function () {
      if (EditBtn.innerHTML == '<i class="fa-solid fa-pen-to-square"></i>') {
        taskInput.removeAttribute("readonly");
        taskInput.focus();
        EditBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
      } else {
        taskInput.setAttribute("readonly", "readonly");
        EditBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
      }
    });

    DelBtn.addEventListener("click", function () {
      taskList.removeChild(taskEl);
    });
  }
});
