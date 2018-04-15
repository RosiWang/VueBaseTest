<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>{{message}}</p>
    <router-link to="/home">Home</router-link>
    <router-link to="/vueTest">TestTest</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function(){
    return {
      message:"测试测试"
          }
  },
  created(){
    this.defaultPath();
  },
  watch:{
    "$route"(to){
      this.defaultPath();
    }
  },
  methods:{
    defaultPath(){
      if(this.$route.fullPath=='/'){
        console.log('path00:',this.$route.path);
        router.push("/home");
        console.log('path:',this.$route.path);
      }
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
