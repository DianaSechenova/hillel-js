"use strict";

$(document).ready(function () {
  const $form = $("#js--form");
  const $list = $(".js--todos-wrapper");
  function initTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach(createListElement);
  }
  function addTodoItem(todoValue, descriptionValue) {
    $form[0].reset();
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const newItem = {
      id: Date.now(),
      todoValue: todoValue,
      descriptionValue: descriptionValue,
      checked: false
    };
    todos.push(newItem);
    localStorage.setItem("todos", JSON.stringify(todos));
    createListElement(newItem);
  }
  function createListElement(item) {
    const {
      id,
      todoValue,
      descriptionValue,
      checked
    } = item;
    const $listItem = $("<li></li>").addClass("list-group-item d-flex align-items-center").attr("data-id", id);
    const $checkbox = $("<input>").attr("type", "checkbox").prop("checked", checked).on("click", event => {
      event.stopPropagation();
      item.checked = $checkbox.prop("checked");
      updateLocalStorage(item);
      toggleCheckedClass($listItem, item.checked);
    });
    const $value = $("<span></span>").text(todoValue).addClass("toDoItemValue ms-2 w-100 h-100").attr("data-bs-toggle", "modal").attr("data-bs-target", "#exampleModal").on("click", () => {
      $(".modal-body").text(descriptionValue);
      $(".modal-title").text(todoValue);
    });
    const $deleteBtn = $("<button></button>").text("Delete").addClass("btn btn-secondary ms-auto").on("click", event => {
      event.stopPropagation();
      deleteIssue($listItem);
    });
    $listItem.append($checkbox, $value, $deleteBtn);
    $list.append($listItem);
    toggleCheckedClass($listItem, checked);
  }
  function updateLocalStorage(item) {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const updatedTodos = todos.map(todo => {
      return todo.id === item.id ? item : todo;
    });
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }
  function toggleCheckedClass($item, isChecked) {
    $item.toggleClass("todo-item--checked", isChecked);
  }
  function deleteIssue($item) {
    const id = parseInt($item.attr("data-id"));
    $item.remove();
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const updatedTodos = todos.filter(todo => {
      return todo.id !== id;
    });
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }
  $form.on("submit", event => {
    event.preventDefault();
    addTodoItem($("#todoInput").val(), $("#description").val());
  });
  initTodos();
});