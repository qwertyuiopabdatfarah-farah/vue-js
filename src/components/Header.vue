<template>
<div>
<header>
     <h1 v-on:click="upDateparent()">{{ title }}</h1>
 </header>   
</div>
</template>
<script>
import { bus } from '../main';
export default {
  props: {
    title: {
      type: String
    }
  },
  data:function () {  
    return{
         titles: 'Apa aja',          
     }
  },
  methods:{
    upDateparent:function (){
      //this.$emit('upDateparents', 'Vue Js Update Parent From Child'); //ini langsung ke parent
      this.title = 'Vue Wizards';
      bus.$emit('upDateparented', 'Vue Js Update Parent From Child');
    }
  }
    
}
</script>


<style scoped>
header{
  background: lightgreen;
  padding: 10px;
}
h1{
  color: #222;
  text-align: center;
}
</style>