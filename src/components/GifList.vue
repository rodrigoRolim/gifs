<template>
  <div class="gifs" ref="gifs">
    <div class="gifs__list" v-if="gifs">
       <gif-list-item
        v-for="gif of gifs" :key="gif.id"
        :width="gif.images.original.width"
        :height="gif.images.original.height"
        :size="gif.images.original.size"
        :url="gif.images.original.url"
        :title="gif.title"
        :author="author(gif.user)"
        :avatar="avatar(gif.user)"
        :uploaded="gif.import_datetime"
        :rating="gif.rating"
      />
    </div>
    <spinner v-if="isLoading"/>
  </div>
</template>

<script>
import GifListItem from './GifListItem'
import Spinner from './base/Spinner'
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'GifList',
  components: {
    GifListItem,
    Spinner
  },
  data: () => ({
    options: {
      sort: 'relevant', 
      lang: 'en', 
      offset: 0, 
      limit: 10, 
      type: 'gifs'
    }
  }),
  created() {
    
  },
  mounted() {
   
    window.addEventListener('scroll', this.getMoreGifs)
  },
  destroy() {
    window.removeEventListener('scroll', this.getMoreGifs)
  },
  computed: {
    ...mapGetters('gifs', [
      'gifs',
      'total',
      'status',
      'numberOfGifs'
    ]),
    isLoading() {
      return this.status === 'loading'
    }
  },
  methods: {
    author(value) {
      return (value) ? value.username : ''
    },
    avatar(value) {
      return (value) ? value.avatar_url : ''
    },
    hasMoreGifs() {
      let gifElement = this.$refs.gifs
      return (window.innerHeight + window.scrollY >= gifElement.offsetHeight) && 
             this.numberOfGifs < this.total && 
             this.status === 'ok';
         
    },
    async getMoreGifs() {
      if(this.hasMoreGifs()) {
        await this.loadMoreGifs()
        this.repositionScrollBar(window.innerHeight + window.scrollY)
      }
    },
    repositionScrollBar(pos) {
      document.documentElement.scrollTop = pos
    },
    ...mapActions('gifs', {
      loadMoreGifs: 'loadMoreGifs',
      listGifs: 'listGifs'
    })
  }
}
</script>

<style lang="scss" scoped>
.gifs {
  display: flex;
  flex-direction: column;
}
.gifs__list {
  margin-top: 50px;
  -webkit-column-count: 3;
  -webkit-column-gap:   0px;
  -moz-column-count:    3;
  -moz-column-gap:      0px;
  column-count:         3;
  column-gap:           0px;  
  width: 890px;
}
</style>