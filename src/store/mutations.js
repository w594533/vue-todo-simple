export const mutations = {
  addTodo (state, { text }) {
    state.todos.push({
      text,
      done: false
    })
  },
  editTodo (state, index) {
    let todos = state.todos
    todos[index].done = !todos[index].done
    state.todos = todos
  },
  setVisibility(state, { filter }) {
    state.visibility = filter
  }
}
