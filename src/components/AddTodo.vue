<template>
  <div class="add__todo">
    <h4>Add Todo</h4>
    <div class="add__todo--form">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add Todo...">
        <input type="submit" value="Add">
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name:'AddTodo',
  methods:{
    ...mapActions(['addTodo']),
    onSubmit(e){
      e.preventDefault();
      this.addTodo(this.title);
    }
  },
  data:()=>{
    return{
      title:''
    }
  }
}
</script>

<style lang="scss" scoped>
$green:#41b883;
  form{
    display: flex;
    input[type="text"]{
      flex:10;
      padding: 10px;
      border:1px solid $green;
      outline:0;
    }
    input[type="submit"]{
      flex:2;
      background:$green;
      border:1px solid $green;
      cursor: pointer;
    }
  }
</style>
