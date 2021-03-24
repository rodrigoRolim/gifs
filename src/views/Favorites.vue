<template>
  <the-navbar />
  <div class="favorites_container">
    <favorite-list :gifs="favorites"/>
  </div>
</template>

<script>
import FavoriteList from '../components/FavoriteList';
import TheNavbar from '../components/TheNavbar';
import { mapGetters } from 'vuex';
export default {
  name: 'Favorites',
  components: {
    FavoriteList,
    TheNavbar
  },
  computed: {
    ...mapGetters('favorites', [
      'favorites'
    ])
  }
}
</script>

<style lang="scss" scoped>
.favorites_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 69px);
}
</style>