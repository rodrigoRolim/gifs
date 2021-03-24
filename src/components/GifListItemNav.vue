<template>
  <div class="gif_nav">
    <button-icon class="gif_nav__btn_detail" @click="toggleGifDetails">
      <font-awesome-icon icon="times" size="1x" v-if="showGifDetails" />
      <font-awesome-icon icon="ellipsis-h" size="1x" v-else />
    </button-icon>
    <button-icon  class="gif_nav__btn_favor" @click="handlingGif">
      <font-awesome-icon icon="heart" size="1x" :class="{ 'gif_nav__btn_favor--save': saved }" />
    </button-icon>
  </div>
</template>

<script>
import ButtonIcon from './base/ButtonIcon';
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'GifListItemNav',
  components: {
    ButtonIcon
  },
  props: {
    gif: Object,
    gifId: String,
    close: Boolean
  },
  data: () => ({
    showGifDetails: false,
    icon: 'ellipsis-h',
    saved: false
  }),
  mounted() {
    this.saved = this.isSaved(this.gifId)
  },
  watch: {
    close(value) {
      this.showGifDetails = value
    }
  },
  computed: {
    ...mapGetters('favorites', [
      'isSaved'
    ])
  },
  methods: {
    toggleGifDetails() {
      this.showGifDetails = !this.showGifDetails;
      if (this.showGifDetails) {
        this.$emit('showDetails', this.gifId);
        return;
      } 
      this.$emit('showDetails', '')
    },
    handlingGif() {
      if (!this.saved) {
        this.saveGifToFavorites()
        this.saved = true;
        return;
      }
      this.removeGifFromFavorites()
      this.saved = false;
    },
    saveGifToFavorites() {
      const favorite = JSON.stringify(this.gif);
      this.saveFavorite(favorite);
    },
    removeGifFromFavorites() {
      const id = this.gifId;
      this.removeFavorite(id);
    },
    ...mapMutations('favorites', [
      'saveFavorite',
      'removeFavorite'
    ])
  }
}
</script>

<style lang="scss" scoped>
.gif_nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 48px;
  .gif_nav__btn_favor {
    margin-right: 10px
  };
  .gif_nav__btn_favor--save {
    color: rgb(248, 85, 85);
  };
}
.gif_nav__btn_detail {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 23px;
}
</style>