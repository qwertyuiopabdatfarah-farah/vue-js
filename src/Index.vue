<template>
   <div id="app">
    <headernya v-bind:title="title" v-on:upDateparents="update($event)"></headernya>
    <valuenya></valuenya>
    <footernya v-bind:title="title"></footernya>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Value from './components/Value.vue';

export default {
  name: 'app',
  components: {
    'headernya': Header,
    'footernya': Footer,
    'valuenya': Value, 
  },
  //props
  data:function(){
    return {
      title:   'Ini Adalah Headeer',
    }
  },
  methods:{
    update:function(event){
      this.title = event;
    }
  }
}
</script>

<style>

</style>
