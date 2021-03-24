<template>
  <div class="gif">
    <div class="gif__header">
      <h2 class="gif__title">{{limitWordLength(gif.title)}}</h2>
      <div class="gif__actions">
        <slot name="nav"></slot>
      </div>
    </div>
    <img :src="gif.images.downsized.url" width="290" class="gif__image" />
    <gif-list-item-details 
      class="gif__detail" 
      v-if="detail"
      :width="gif.images.downsized.width"
      :height="gif.images.downsized.height"
      :size="gif.images.downsized.size"
      :uploaded="gif.import_datetime"
      :rating="gif.rating"
    />
    <div class="gif__footer">
      <img :src="getAvatar(gif.user)" class="gif__avatar" width="30" height="30"/>
      <p class="gif__author">{{getAuthor(gif.user)}}</p>
    </div>
  </div>
</template>

<script>
import GifListItemDetails from './GifListItemDetails';
import { mapMutations } from 'vuex';

export default {
  name: 'GifListItem',
  props: {
    gif: Object,
    detail: {
      type: Boolean,
      default: false
    }
  },
  components: {
    GifListItemDetails,
  },
  methods: {
    limitWordLength(word) {
      return (word.length > 20) ? word.slice(0, 15) + '...' : word;
    },
    getAuthor(value) {
      return (value) ? value.username : 'sem autor';
    },
    getAvatar(value) {
      return (value) ? value.avatar_url : ''
    },
    ...mapMutations('favorites', [
      'saveFavorite'
    ])
  }
}
</script>

<style lang="scss" scoped>
.gif {
  position: relative;
  margin: 5px;
  width: 230px;
  @include respond-to(medium-screens) {
    width: 375px
  }
  @include respond-to(handhelds) {
    display: flex;
    justify-content: center;
    width: 95%
  }
}
/* .gif:hover .gif__header,
.gif:hover .gif__footer,
.gif:hover .gif__details {
  visibility: visible;
} */
.gif__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 30px;
  background-color: rgba(0,0,0,0.4);
  color: white;
  position: absolute;
  top: 0;
  width: inherit;
  .gif__btn_detail {
    margin-right: 10px
  };
  .gif__title {
    margin-left: 10px;
    font-size: 12px
  };
  .gif__actions {
    margin-right: 10px
  }
}
.gif__image {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 190px;
  width: inherit;

}
.gif__footer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
 
  min-height: 30px;
  background-color: rgba(0,0,0,0.4);
  position: absolute;
  bottom: 0;
  width: inherit;
  color: white;
  font-weight: 550;
  font-size: 14px;
  .gif__author {
    margin-left: 10px
  }
}
.gif__detail {
  width: 90%;
  position: absolute;
  top: 35px;
  left: 5%;
}
</style>