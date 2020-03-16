<template>
  <div id="app">
    <router-view/>
    <ta-header></ta-header>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from './components/TabBar'
import TaHeader from './components/TaHeader'
export default {
  name: 'App',
  components: {TaHeader, TabBar}
}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,
body {
  padding: 0;
  margin: 0;
}
</style>
