"use strict";

const form = document.querySelector(".js--form");
let list = document.querySelector(".js--todos-wrapper");
initTodos();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodoItem(form.elements["value"].value);
});

function initTodos() {
  let todos = JSON.parse(localStorage.getItem("todos"));
  if (todos && todos.length > 0) {
    todos.forEach((item) => {
      createListElement(item);
    });
  }
}

function addTodoItem(value) {
  form.reset();
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  let newItem = {
    id: Date.now(),
    value: value,
    checked: false,
  };
  todos.push(newItem);

  localStorage.setItem("todos", JSON.stringify(todos));
  createListElement(newItem);
}

function createListElement(value) {
  let listItem = document.createElement("li");
  listItem.classList.add("todo-item");
  listItem.dataset.id = value.id;

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "checked";
  checkbox.addEventListener("input", function () {
    value.checked = this.checked;
    updateLocalStorage(value);
    toggleCheckedClass(listItem, this.checked);
  });
  listItem.appendChild(checkbox);

  let descriptionSpan = document.createElement("span");
  descriptionSpan.textContent = value.value;
  descriptionSpan.classList.add("todo-item__description");
  listItem.appendChild(descriptionSpan);

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Видалити";
  deleteBtn.classList.add("todo-item__delete");
  deleteBtn.addEventListener("click", function () {
    deleteIssue(listItem);
  });

  listItem.appendChild(deleteBtn);
  list.appendChild(listItem);

  toggleCheckedClass(listItem, value.checked);
}

function updateLocalStorage(item) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  let index = todos.findIndex((todo) => todo.id === item.id);
  todos[index] = item;
  localStorage.setItem("todos", JSON.stringify(todos));
}

function toggleCheckedClass(item, isChecked) {
  isChecked
    ? item.classList.add("todo-item--checked")
    : item.classList.remove("todo-item--checked");
}

function deleteIssue(item) {
  item.remove();
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  let index = todos.findIndex((todo) => todo.id === parseInt(item.dataset.id));
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
