<template>
<div>
<footer>
     <p v-on:click="ubahData()">{{ copyright }} @ {{ title }}</p>
 </footer>   
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
        copyright: 'Copyright 2018',
     }
  },
  methods: {
    ubahData: function(){
       this.title = 'Sebenarnya Ini Adalah Footer'
    }
  },
  created(){
    bus.$on('upDateparented', (data) => {
      this.title = data;
    })
  }
}
</script>


<style scoped>
footer{
  background: black;
  padding: 6px;
}
p{
  color: red;
  text-align: center;
}
</style>