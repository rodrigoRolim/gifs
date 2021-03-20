<template>
  <div class="home">
    
  </div>
</template>

<script>
import GifService from '../services/gifs-service'
import { Giphy } from '../services'
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      name
    }
    
  },
  created() {
    const name = 'dog';
    const options = { sort: 'relevant', lang: 'en', limit: 10, type: 'stickers' }
    const gf = new GifService(Giphy)
    gf.search(name, options)
  }
}
</script>

<style lang="scss" scoped>
.home {
  background-color: red;
  min-height: calc(100vh - 50px);
}
</style>