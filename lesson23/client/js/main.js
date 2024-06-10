document.addEventListener("DOMContentLoaded", () => {
  new TodoList();
});

class TodoList {
  constructor() {
    this.form = document.querySelector(".js--form");
    this.list = document.querySelector(".js--todos-wrapper");
    this.form.addEventListener("submit", this.handleFormSubmit.bind(this));
    this.initTodos();
  }

  async initTodos() {
    try {
      const response = await fetch("/todos");
      const todos = await response.json();
      todos.forEach((item) => this.createListElement(item));
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  }

  async addTodoItem(todoValue) {
    try {
      const response = await fetch("/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: todoValue,
          checked: false,
        }),
      });
      const newItem = await response.json();

      this.createListElement(newItem);
    } catch (error) {
      console.error("Error adding todo item:", error);
    }
  }

  async createListElement(item) {
    const { _id, title, checked } = item;

    const listItem = document.createElement("li");
    listItem.classList.add("todo-item");
    listItem.setAttribute("data-id", _id);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = checked;
    checkbox.addEventListener("click", (event) =>
      this.handleCheckboxClick(event, item)
    );
    const value = document.createElement("span");
    value.textContent = title;
    value.classList.add("todo-item__title");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("todo-item__delete");
    deleteBtn.addEventListener("click", (event) =>
      this.handleDeleteClick(event, listItem)
    );

    listItem.append(checkbox, value, deleteBtn);
    this.list.appendChild(listItem);
    this.toggleCheckedClass(listItem, checked);
  }

  async handleCheckboxClick(event, item) {
    try {
      item.checked = event.target.checked;
      await fetch(`/todos/${item._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });

      this.toggleCheckedClass(event.target.closest("li"), item.checked);
    } catch (error) {
      console.error("Error updating todo item:", error);
    }
  }

  async handleDeleteClick(event, item) {
    try {
      const id = item.getAttribute("data-id");
      await fetch(`/todos/${id}`, {
        method: "DELETE",
      });
      item.remove();
    } catch (error) {
      console.error("Error deleting todo item:", error);
    }
  }

  async handleFormSubmit(event) {
    try {
      const todoInput = document.querySelector(".js--form__input");
      await this.addTodoItem(todoInput.value);

      this.form.reset();
    } catch (error) {
      console.error("Error handling form submit:", error);
    }
  }

  toggleCheckedClass(item, isChecked) {
    if (isChecked) {
      item.classList.add("todo-item--checked");
    } else {
      item.classList.remove("todo-item--checked");
    }
  }
}
