<template>
  <div>
    <h4>Todos</h4>
    <div class="todos">
      <div class="todo" v-for="todo in allTodos" :key="todo.id">
        {{todo.title}}
        <p>
          <i class="fas fa-trash-alt" @click="deleteTodo(todo.id)"></i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Todos',
  computed:mapGetters(['allTodos']),
  methods:{
    ...mapActions(['fetchTodos','deleteTodo']),

  },
  created(){
    this.fetchTodos();
  }
};
</script>

<style lang="scss" scoped>
   .todos{
     display: grid;
     grid-template-columns: repeat(3,1fr);
     grid-gap:1rem;
     .todo{
       border:1px solid #ccc;
       background: #41b883;
       padding: 1rem;
       border-radius: 5px;
       text-align:center;
       position: relative;
       cursor: pointer;
       i{
         position: absolute;
         bottom: 10px;
         right:10px;
         color:#fff;
         cursor:pointer;
       }
     }
   }
</style>
