<template>
  <section>
      <header>
          <h1>todos</h1>
          <input class="new-todo"
            autofocus
            autocomplete="off"
            placeholder="what needs to be done?"
            @keyup.enter="addTodo"
          />
          <ul>
            <li v-for="(todo, index) in filterTodos">
              <a href="javascript:void(0)" @click="editTodo(index)" v-bind:class="{ textDecoration: todo.done }">{{ todo.text }}</a>
            </li>
          </ul>
          <div class="filter-item" v-if="$store.state.todo.todos.length > 0">
            <span @click="setVisibility('all')" v-bind:class="{ active: $store.state.todo.visibility == 'all' }">All</span>
            <span @click="setVisibility('activity')" v-bind:class="{ active: $store.state.todo.visibility == 'activity' }">Activity</span>
            <span @click="setVisibility('completed')" v-bind:class="{ active: $store.state.todo.visibility == 'completed' }">Completed</span>
          </div>
      </header>
  </section>
</template>
<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'filterTodos'
    ])
  },
  methods: {
    ...mapActions([
      'addTodoNew'
    ]),
    addTodo (e) {
      const text = e.target.value
      if (text.trim()) {
        this.addTodoNew({text})
      }
      e.target.value = ''
    },
    editTodo (index) {
      this.$store.commit('editTodo', index)
    },
    setVisibility (filter) {
      this.$store.commit('setVisibility', { filter })
    }
  }
}
</script>
<style scoped>
  .filter-item {
    cursor: pointer;
    font-size: 12px;
    padding-right: 10px;
    display: inline-block;
  }
  .filter-item span.active {
    color: red;
  }
  .textDecoration {
    opacity: 0.7;
    text-decoration: line-through;
  }
</style>
