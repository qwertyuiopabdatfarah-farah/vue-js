<template>
<div>
  <ul>
     <li v-for="array in arrays">{{ array }}</li>
  </ul>
  <h1>{{ hallo('Ini Adalah Parameter Dilempar Ke Function') }}</h1>
</div>
</template>
<script>
export default {
  data:function () {  
    return{
        name:   'Erwin Wiguna',
        tested: 'Latihan',
        arrays: ['Erwin Wiguna', 'Anggia Tresa', 'Yumna'],       
     };
  }, 
    methods: {
        hallo:function(nama_parameter){
            return 'Fungsi Dengan Farameter => ' + nama_parameter + ' ' + this.name + ' ' + this.tested;
        }
    }
}
</script>


<style scoped>
h1{
  color: red;
}
ul{
  color: orange;
}
</style>