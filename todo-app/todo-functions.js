const getSavedTodos = function () {
  // ****************** ASSIGNS LOCAL STORAGE TO ARRAY ******************************
  let todos = []
  let newTodo = localStorage.getItem("todos")
  if (newTodo !== null) {
    todos = JSON.parse(newTodo)
  } else {
    todos = []
  }
  return todos
}

// ******************* Saves data to local Storage ***************************
const saveTodos = function (todo) {
  localStorage.setItem('todos', JSON.stringify(todo))
}
//******************** Generate DOM object *******************************
const generateTodoDOM = function (todo) {
  let noteEl = document.createElement('div')
  let todoEl = document.createElement('span')
  let buttonEl = document.createElement('button')
  let checkboxEl = document.createElement('input')

  checkboxEl.setAttribute("type", "checkbox")
  buttonEl.textContent = "Delete"

  if (todo.text.length > 0) {
    todoEl.textContent = `${todo.text}`
  } else {
    todoEl.textContent = "You have not specified any Todos"
  }
  noteEl.appendChild(checkboxEl)
  noteEl.appendChild(todoEl)
  noteEl.appendChild(buttonEl)
  return noteEl
}


// ****************** Renders Application Data ****************************
const renderTodo = function (todos, filtered) {
  let filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filtered.searchText.toLowerCase())
  })

  filteredTodos = filteredTodos.filter(function (todo) {
    return !filtered.hideCompleted || !todo.completed
  })

  document.querySelector('#todo-list').innerHTML = ''
  document.querySelector('#todo-list-header').innerHTML = ''

  const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
  })

  generateSummaryDOM(todos, filtered)
  // const message = document.createElement('h2')
  // message.textContent = `You have ${filteredTodos.length} tasks to complete`
  // document.querySelector('#todo-list-header').appendChild(message)

  // ****************** CHECKS LOCAL STORAGE TO GRAB TODOS ******************************
  filteredTodos.forEach(function (todo, index) {
    const todoEl = generateTodoDOM(todo)

    document.querySelector("#todo-list").appendChild(todoEl)
  })
}
// ******************** Generates a summary header of todo ************
const generateSummaryDOM = function (todos, filtered) {
  let filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filtered.searchText.toLowerCase())
  })

  filteredTodos = filteredTodos.filter(function (todo) {
    return !filtered.hideCompleted || !todo.completed
  })

  const message = document.createElement('h2')
  message.textContent = `You have ${filteredTodos.length} tasks to complete`
  document.querySelector('#todo-list-header').appendChild(message)
}
