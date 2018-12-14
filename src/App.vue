<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="routes">
      <router-link to="/smoothdnd" tag="button">Smooth DnD</router-link>
      <router-link to="/dragula" tag="button">Dragula</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
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

.routes {
  margin: 10px 0;
}
</style>
