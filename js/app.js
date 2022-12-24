const toDoArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

const addTask = document.querySelector("#addTask");

addTask.addEventListener("click", function () {
  const input = document.querySelector("#taskInput");
  if (!input.value) {
    alert("Please add a Task");
    return;
  } else {
    createTask(input);
  }
});

function displayTask() {
  let task = "";
  for (let i = 0; i < toDoArray.length; i++) {
    task += 
    `<div class="task">
        <div class="content">
            <input type="checkbox" class="form-check-input">
            <input type = "text" class="text" value="${toDoArray[i]}" readonly> 
        </div>        
        <div class="action">                          
            <button class="btn btn-secondary edit"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="btn btn-danger delete"><i class="fa-solid fa-trash"></i></button>          
        </div>
      </div> `;
  }

  document.querySelector(".taskContainer").innerHTML = task;

  deleteListeners();
  editListeners();
}

function deleteListeners() {
  let deleteBtn = document.querySelectorAll(".delete");
  deleteBtn.forEach((delBtn, i) => {
    delBtn.addEventListener("click", () => {
      deleteItem(i);
    });
  });
}

function deleteItem(i) {
  toDoArray.splice(i, 1);
  localStorage.setItem("items", JSON.stringify(toDoArray));
  location.reload();
}

function editListeners() {
  const editBtn = document.querySelectorAll(".edit");
  const inputs = document.querySelectorAll(".text");
  editBtn.forEach((eBtn, i) => {
    eBtn.addEventListener("click", () => {
      if (eBtn.innerHTML == '<i class="fa-solid fa-pen-to-square"></i>') {
        inputs[i].removeAttribute("readonly");
        inputs[i].focus();
        eBtn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i>';
      } else if (eBtn.innerHTML == '<i class="fa-solid fa-floppy-disk"></i>') {
        console.log("clicked");
        updateItem(inputs[i].value, i);
      }
    });
  });
}

function updateItem(text, i) {
  const eBtn = document.querySelectorAll(".edit");
  toDoArray[i] = text;
  localStorage.setItem("items", JSON.stringify(toDoArray));
  eBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
  location.reload();
}

function createTask(input) {
  toDoArray.push(input.value);
  localStorage.setItem("items", JSON.stringify(toDoArray));
  location.reload();
}

window.onload = function () {
  displayTask();
};
