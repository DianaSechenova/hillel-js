"use strict";

$(document).ready(function () {
  var $form = $("#js--form");
  var $list = $(".js--todos-wrapper");
  function initTodos() {
    var todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach(createListElement);
  }
  function addTodoItem(todoValue, descriptionValue) {
    $form[0].reset();
    var todos = JSON.parse(localStorage.getItem("todos")) || [];
    var newItem = {
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
    var id = item.id,
      todoValue = item.todoValue,
      descriptionValue = item.descriptionValue,
      checked = item.checked;
    var $listItem = $("<li></li>").addClass("list-group-item d-flex align-items-center").attr("data-id", id);
    var $checkbox = $("<input>").attr("type", "checkbox").prop("checked", checked).on("click", function (event) {
      event.stopPropagation();
      item.checked = $checkbox.prop("checked");
      updateLocalStorage(item);
      toggleCheckedClass($listItem, item.checked);
    });
    var $value = $("<span></span>").text(todoValue).addClass("toDoItemValue ms-2 w-100 h-100").attr("data-bs-toggle", "modal").attr("data-bs-target", "#exampleModal").on("click", function () {
      $(".modal-body").text(descriptionValue);
      $(".modal-title").text(todoValue);
    });
    var $deleteBtn = $("<button></button>").text("Delete").addClass("btn btn-secondary ms-auto").on("click", function (event) {
      event.stopPropagation();
      deleteIssue($listItem);
    });
    $listItem.append($checkbox, $value, $deleteBtn);
    $list.append($listItem);
    toggleCheckedClass($listItem, checked);
  }
  function updateLocalStorage(item) {
    var todos = JSON.parse(localStorage.getItem("todos")) || [];
    var updatedTodos = todos.map(function (todo) {
      return todo.id === item.id ? item : todo;
    });
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }
  function toggleCheckedClass($item, isChecked) {
    $item.toggleClass("todo-item--checked", isChecked);
  }
  function deleteIssue($item) {
    var id = parseInt($item.attr("data-id"));
    $item.remove();
    var todos = JSON.parse(localStorage.getItem("todos")) || [];
    var updatedTodos = todos.filter(function (todo) {
      return todo.id !== id;
    });
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }
  $form.on("submit", function (event) {
    event.preventDefault();
    addTodoItem($("#todoInput").val(), $("#description").val());
  });
  initTodos();
});