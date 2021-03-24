<template>
  <div class="gifs" id="gifs">
    <div class="gifs__list" >
       <gif-list-item
        v-for="gif of gifs" :key="gif.id"
        :gif="gif"
        :detail="compareIds(gif.id)"
      >
        <template v-slot:nav>
          <gif-list-item-nav
            :close="compareIds(gif.id)"
            :gifId="gif.id"
            :gif="gif"
            @showDetails="toggleGifDetails"
          />
        </template>
      </gif-list-item>
    </div>
    <spinner v-if="isLoading"/>
  </div>
</template>

<script>
import GifListItem from './GifListItem'
import GifListItemNav from './GifListItemNav';
import Spinner from './base/Spinner'
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'GifList',
  components: {
    GifListItem,
    GifListItemNav,
    Spinner
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
  mounted() {
    window.addEventListener('scroll', this.getMoreGifs)
  },
  unmounted() {
    console.log('destroy');
    window.removeEventListener('scroll', this.getMoreGifs)
  },
  computed: {
    ...mapGetters('gifs', [
      'total',
      'status',
      'numberOfGifs'
    ]),
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
    },
    hasMoreGifs() {
      let gifElement = document.getElementById('gifs')
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
$column-width: 230px;
$column-witdh-md: 380px;
$column-width-sm: 100vw;
.gifs {
  display: flex;
  flex-direction: column;
}
.gifs__list {
  margin-top: 50px;
  -webkit-column-width: $column-width;
  -webkit-column-gap:   0px;
  -moz-column-width:    $column-width;
  -moz-column-gap:      0px;
  column-width:         $column-width;
  column-gap:           0px;   
  width: 950px;
  @include respond-to(medium-screens) {
    -webkit-column-width: $column-witdh-md;
    -webkit-column-gap:   0px;
    -moz-column-width:    $column-witdh-md;
    -moz-column-gap:      0px;
    column-width:         $column-witdh-md;
    width: 769px
  }
  @include respond-to(handhelds) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
}
</style>