<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>{{message}}</p>
    <div v-on:click="playVideo()">
      <video :src="videoSrc" id="videoPlay" controls="controls" width="700"
             v-show="true" class="video">您的浏览器不支持 video 视屏播放。</video>
    </div>
    <router-link to="/home">Home</router-link>
    <router-link to="/vueTest">TestTest</router-link>
    <router-view/>
  </div>
</template>

<script>
  // import router from
  export default {
    name: 'App',
    data:function(){
      return {
        message:"测试测试",
        videoSrc: 'static/video/test.mp4'     //获取视频播放资源
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
        // if(this.$route.fullPath=='/'){
        //   console.log('path00:',this.$route.path);
        //   router.push("/home");
        //   console.log('path:',this.$route.path);
        // }
      },
      playVideo(){
        var vdo = document.getElementById("videoPlay");
        vdo.play();
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
