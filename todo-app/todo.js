// ****************** INITIATES ARE EMPTY ARRAY TO STORE OUR OBJECTS ******************************
const todos = getSavedTodos()

// ****************** CREATES AN AREA TO STORE EVENT TRIGGERS ******************************
const filtered = {
  searchText: '',
  hideCompleted: false
}

// ****************** CREATES THE LIST FOR THE FIRST TIME ******************************

renderTodo(todos, filtered)
// ****************** EVENT LISTENERS ******************************

document.querySelector('#search-todos').addEventListener('input', function (e) {
  filtered.searchText = e.target.value
  renderTodo(todos, filtered)
})

// Add items to the todo array
document.querySelector('#add-todo').addEventListener('submit', function (e) {
  e.preventDefault()
  todos.push({
      text: e.target.elements.addTodo.value,
      completed: false
  })
  saveTodos(todos)
  e.target.elements.addTodo.value = ''
  renderTodo(todos, filtered)
})

// Check to see if the check box is checked
document.querySelector("#checkbox").addEventListener('change', function (e) {
  filtered.hideCompleted = e.target.checked
  renderTodo(todos, filtered)
})
