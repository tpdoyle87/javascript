
const todos = [{
    text: 'Make coffee',
    completed: true

  }, {
    text: 'Take bella to swim',
    completed: true
  }, {
    text: 'Study JavaScript',
    completed: false
  }, {
    text: 'look up css/html courses',
    completed: true
  }, {
    text: 'prepare to travel Wednesday',
    completed: false
  }]

const sortTodos = function (todos) {
  todos.sort(function (a, b) {
    if (!a.completed && b.completed) {
      return -1
    } else if (!b.completed && a.completed){
      return 1
    } else {
      return 0
    }
  })
}

const deleteTodo = function (todos, textValue) {
  const index = todos.findIndex(function (todo) {
    return todo.text.toLowerCase() === textValue.toLowerCase()
  })
  if (index >= 0){
    todos.splice(index, 1)
    console.log(todos)
  } else {
    console.log("No match")
  }
}

const getThingsToDo = function (todos) {
  return todos.filter(function (todo){
    return !todo.completed
  })
}

sortTodos(todos)
console.log(todos)


// deleteTodo(todos, 'take bella to swim')
// console.log(getThingsToDo(todos))


// deleteTodo(todos, 'study javascript') // should be deleted
// deleteTodo(todos, 'Make coffee!!')  // should not be deleteTodo
