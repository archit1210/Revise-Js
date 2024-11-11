function loadTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || { "todoList": [] }
    console.log(todos)
    return todos
}

function addTodoToLocalStorage(todoText) {
    const todos = loadTodos()
    todos.todoList.push(todoText)
    localStorage.setItem("todos", JSON.stringify(todos))
}

function appendTodos(todoText) {
    const todoList = document.getElementById("todoList")
    const todoItem = document.createElement("li")
    todoItem.textContent = todoText

    todoItem.classList.add("todoItem")

    const editBtn = document.createElement('button')
    editBtn.textContent = "Edit"
    editBtn.classList.add("editBtn")

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "Delete"
    deleteBtn.classList.add("deleteBtn")

    const completeBtn = document.createElement('button')
    completeBtn.textContent = "Completed"
    completeBtn.classList.add("completeBtn")

    todoItem.appendChild(editBtn)
    todoItem.appendChild(deleteBtn)
    todoItem.appendChild(completeBtn)
    todoList.appendChild(todoItem)
}

document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input")
    const submitButton = document.getElementById("add")

    submitButton.addEventListener("click", (event) => {
        const todoText = todoInput.value
        if (todoText === "") {
            alert("Please add something to the list")
        } else {
            addTodoToLocalStorage(todoText)
            todoInput.value = "" // Clear input after adding
            appendTodos(todoText)
        }
    })

    todoInput.addEventListener("change", (event) => {
        const text = event.target.value
        event.target.value = text.trim()
    })

    const todos = loadTodos()
    todos.todoList.forEach(todo => {
        const todoList = document.getElementById("todoList")
        const newTodoItem = document.createElement("li")
        newTodoItem.textContent = todo
        todoList.appendChild(newTodoItem)
    });
})
