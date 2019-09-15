/* eslint-disable radix */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import axios from 'axios';

const state = {
  todos: [
    {
      id: 1,
      title: 'Todo 1',
    },
    {
      id: 2,
      title: 'Todo 2',
    },
  ],
};

const getters = {
  allTodos: statex => statex.todos,
};

const actions = {
  async fetchTodos({ commit }) {
    try {
      const { data: response } = await axios.get('https://jsonplaceholder.typicode.com/todos');
      commit('setTodos', response);
    } catch (error) {
      console.log(error);
    }
  },
  async addTodo({ commit }, title) {
    try {
      const { data: response } = await axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false,
      });
      commit('newTodo', response);
    } catch (error) {
      console.log(error);
    }
  },
  async deleteTodo({ commit }, id) {
    try {
      const { data: response } = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      console.log(response);
      commit('removeTodo', id);
    } catch (error) {
      console.log(error);
    }
  },
  async filterTodos({ commit }, e) {
    // Get selected number
    const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
    try {
      const { data: response } = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
      commit('setTodos', response);
    } catch (error) {
      console.log(error);
    }
  },
};

const mutations = {
  setTodos: (statex, todos) => (statex.todos = todos),
  newTodo: (statex, todo) => statex.todos.unshift(todo),
  removeTodo: (statex, id) => statex.todos = statex.todos.filter(todo => todo.id !== id),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
