<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/lib/flexible.0.3.4'

export default {
  name: 'app'
}
</script>

<style>
*{
  margin: 0;padding: 0;
}
html, body{margin: 0;padding: 0}
body{
  margin: 0 auto;
  width: 10rem;
  background-color: #ffd600;
  overflow:hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: absolute;
  width: 10rem;
  height: 100%;
  overflow: hidden;
  background-color: #ffd600;
}
</style>
