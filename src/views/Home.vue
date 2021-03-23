<template>
  <div class="home">
    <gif-list />
  </div>
</template>

<script>
import GifList from '../components/GifList'
import GifService from '../services/gifs-service'
import { Giphy } from '../services'
export default {
  name: 'Home',
  components: {
    GifList
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 69px);
}
</style>