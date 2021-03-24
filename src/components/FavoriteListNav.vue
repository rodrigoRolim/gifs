<template>
  <div class="favor_nav">
    <button-icon  class="favor_nav__btn_favor" @click="updateFavorite">
      <font-awesome-icon icon="pen" size="1x" />
    </button-icon>
    <button-icon class="favor_nav__btn_detail" @click="removeFavorite(gifId)">
      <font-awesome-icon icon="trash" size="1x" />
    </button-icon>
  </div>
</template>

<script>
import ButtonIcon from './base/ButtonIcon';
import { mapMutations } from 'vuex';
export default {
  name: 'FavorGifListItemNav',
  props: {
    gifId: String
  },
  components: {
    ButtonIcon,
  },
  methods: {
    ...mapMutations('favorites', [
      'removeFavorite',
      'updateFavorite'
    ]),

  }
}
</script>

<style lang="scss" scoped>

</style>