$(document).ready(function () {
  $(document).ready(function () {
    const $form = $("#js--form");
    const $list = $(".js--todos-wrapper");
    initTodos();

    $form.on("submit", function (event) {
      event.preventDefault();
      addTodoItem($("#todoInput").val(), $("#description").val());
    });

    function initTodos() {
      let todos = JSON.parse(localStorage.getItem("todos"));
      if (todos && todos.length > 0) {
        todos.forEach((item) => {
          createListElement(item);
        });
      }
    }

    function addTodoItem(todoValue, descriptionValue) {
      $form[0].reset();
      let todos = JSON.parse(localStorage.getItem("todos")) || [];
      let newItem = {
        id: Date.now(),
        todoValue: todoValue,
        descriptionValue: descriptionValue,
        checked: false,
      };
      todos.push(newItem);

      localStorage.setItem("todos", JSON.stringify(todos));
      createListElement(newItem);
    }

    function createListElement(item) {
      let $listItem = $("<li></li>")
        .addClass("list-group-item d-flex align-items-center")
        .attr("data-id", item.id);

      let $checkbox = $("<input>")
        .attr("type", "checkbox")
        .attr("name", "checked")
        .prop("checked", item.checked)
        .on("click", function (event) {
          event.stopPropagation();
          item.checked = this.checked;
          updateLocalStorage(item);
          toggleCheckedClass($listItem, this.checked);
        });

      let $value = $("<span></span>")
        .text(item.todoValue)
        .addClass("toDoItemValue ms-2 w-100 h-100")
        .attr("data-bs-toggle", "modal")
        .attr("data-bs-target", "#exampleModal")
        .on("click", function () {
          $(".modal-body").text(`${item.todoValue} : ${item.descriptionValue}`);
        });

      let $deleteBtn = $("<button></button>")
        .text("Видалити")
        .addClass("btn btn-secondary ms-auto")
        .on("click", function (event) {
          event.stopPropagation();
          deleteIssue($listItem);
        });

      $listItem.append($checkbox, $value, $deleteBtn);
      $list.append($listItem);

      toggleCheckedClass($listItem, item.checked);
    }

    function updateLocalStorage(item) {
      let todos = JSON.parse(localStorage.getItem("todos")) || [];
      let index = todos.findIndex((todo) => todo.id === item.id);
      todos[index] = item;
      localStorage.setItem("todos", JSON.stringify(todos));
    }

    function toggleCheckedClass($item, isChecked) {
      if (isChecked) {
        $item.addClass("todo-item--checked");
      } else {
        $item.removeClass("todo-item--checked");
      }
    }

    function deleteIssue($item) {
      $item.remove();
      let todos = JSON.parse(localStorage.getItem("todos")) || [];
      let index = todos.findIndex(
        (todo) => todo.id === parseInt($item.attr("data-id"))
      );
      todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  });
});
