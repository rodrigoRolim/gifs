<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './styles/__colors.scss';
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #2c3e50;
}

#app {
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  line-height: 1.1;
  letter-spacing: .3px
}

</style>
