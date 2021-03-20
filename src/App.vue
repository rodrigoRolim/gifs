<template>
  <the-navbar />
  <router-view/>
</template>

<script>
import TheNavbar from './components/TheNavbar'
export default {
  name: 'App',
  components: {
    TheNavbar
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: #2c3e50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
