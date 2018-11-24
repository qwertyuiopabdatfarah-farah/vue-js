<template>
<div id="tampilan">
  <ul>
    <li v-for="data in datas" v-on:click="data.show = !data.show">
      <h2>{{ data.name }}</h2>
      <h3 v-show="data.show">{{ data.job }}</h3>
    </li>
  </ul> 
  <button v-on:click="deleteData()">Delete</button>
</div>
</template>
<script>
export default {
  data:function () {  
    return{
         datas:[
            {name: 'Erwin Wiguna',    job: 'Programmer', show: false},
            {name: 'Erwin Situmrang', job: 'Macul',      show: false},
            {name: 'Wiguna Aja',      job: 'Apa Aja',    show: false},
            {name: 'Erwin Wiguna',    job: 'Programmer', show: false},
            {name: 'Erwin Situmrang', job: 'Macul',      show: false},
            {name: 'Wiguna Aja',      job: 'Apa Aja',    show: false},
            {name: 'Erwin Wiguna',    job: 'Programmer', show: false},
         ]
     }
  },
  methods:{
    deleteData:function(){
      this.datas.pop();
    }
  },
  //lifecycle hooks
  beforeCreate(){
    alert('beforeCreate');
  },
  created(){
    alert('Created');
  },
  beforeMount(){
    alert('beforeMount');
  },
  mounted(){
    alert('mounted')
  },
  beforeUpdate(){
    alert('beforeUpdate');
  },
  updated(){
    alert('updated');
  }

}
</script>


<style scoped>
#tampilan{
  width: 100%;
  max-width: 100%;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul{
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0; 
}
li{
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style> 