<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default { name: 'App' }
</script>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;
}
* {
    padding: 0;
    margin: 0;
}
html {
    font-size: 62.5%;
    width: 100%;
    height: 100%;
}
body {
    width: 100%;
    height: 100%;
}
</style>
