<template>
  <div class="favorites" ref="gifs">
    <div class="favorites__list" v-if="gifs">
       <gif-list-item
        v-for="gif of gifs" :key="gif.id"
        :gif="gif"
        :detail="compareIds(gif.id)"
      >
        <template v-slot:nav>
          <favorite-list-nav 
            :close="compareIds(gif.id)"
            :gifId="gif.id"
            :gif="gif"
            @showDetails="toggleGifDetails"
          />
        </template>
      </gif-list-item>
    </div>
    <!-- <spinner v-if="isLoading"/> -->
  </div>
</template>

<script>
import GifListItem from './GifListItem'
import FavoriteListNav from './FavoriteListNav';
/* import Spinner from './base/Spinner' */
export default {
  name: 'FavoriteList',
  components: {
    GifListItem,
    FavoriteListNav,
   /*  Spinner */
  },
  props: {
    gifs: Array
  },
  data: () => ({
    gifId: '',
    options: {
      sort: 'relevant', 
      lang: 'en', 
      offset: 0, 
      limit: 10, 
      type: 'gifs'
    }
  }),
  computed: {
    isLoading() {
      return this.status === 'loading'
    }
  },
  methods: {
    toggleGifDetails(value) {
      this.gifId = value;
    },
    compareIds(id) {
      
      return this.gifId === id
    },
    author(value) {
      return (value) ? value.username : ''
    },
    avatar(value) {
      return (value) ? value.avatar_url : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.favorites {
  display: flex;
  flex-direction: column;
}
.favorites__list {
  margin-top: 50px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  @include respond-to(handhelds) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
}
</style>