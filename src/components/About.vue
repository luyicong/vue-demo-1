<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>About Page</h2>
    <h2>{{ $route.params.name }}</h2>
    <button @click="getParam">get Param</button>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'Welcome to About Page'
    }
  },
  methods:{
      //获取路由地址的参数
      getParam (){
          console.log(this.$route.params);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
