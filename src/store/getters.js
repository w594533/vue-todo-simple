export const filterTodos = state => {
  switch (state.visibility) {
    case 'all':
      return state.todos
      break;
    case 'activity':
      return state.todos.filter(todo => !todo.done)
    case 'completed':
      return state.todos.filter(todo => todo.done)
    default:
      return state.todos
  }
}
