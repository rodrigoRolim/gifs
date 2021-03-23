<template>
  <div class="gif">
    <div class="gif__header">
      <h2 class="gif__title">{{limitWordLength(title)}}</h2>
      <div class="gif__actions">
        <button-icon class="gif__btn_detail" @click="toggleGifDetails">
          <font-awesome-icon icon="times" size="1x" v-if="icon === 'times'"/>
          <font-awesome-icon icon="ellipsis-h" size="1x" v-else/>
        </button-icon>
        <button-icon  class="gif__btn_favor" @click="saveGif">
          <font-awesome-icon icon="heart" size="1x" :class="{'gif__btn_favor--save': saved}"/>
        </button-icon>
      </div>
    </div>
    <img :src="url" width="290" class="gif__image"/>
    <gif-details 
      class="gif__detail" 
      v-if="showGifDetails"
      :width="width"
      :height="height"
      :size="size"
      :uploaded="uploaded"
      :rating="rating"
    />
    <div class="gif__footer">
      <img :src="avatar" class="gif__avatar" width="30" height="30"/>
      <p class="gif__author">{{getAuthor(author)}}</p>
    </div>

  </div>
</template>

<script>
import ButtonIcon from './base/ButtonIcon';
import GifDetails from './GifDetails'
export default {
  name: 'GifListItem',
  props: {
    url: String,
    width: String,
    height: String,
    size: String,
    title: String,
    author: String,
    avatar: String,
    uploaded: String,
    rating: String
  },
  components: {
    ButtonIcon,
    GifDetails
  },
  data: () => ({
    showGifDetails: false,
    icon: 'ellipsis-h',
    saved: false
  }),
  created() {
   
  },
  methods: {
    toggleGifDetails() {
      this.showGifDetails = !this.showGifDetails;
      this.icon = (this.showGifDetails) ? 'times' : 'ellipsis-h';
    },
    saveGif() {
      this.saved = !this.saved
    },
    limitWordLength(word) {
      return (word.length > 20) ? word.slice(0, 15) + '...' : word;
    },
    getAuthor(value) {
      return (value) ? value : 'sem autor';
    }
  }
}
</script>

<style lang="scss" scoped>
.gif {
  position: relative;
  margin: 5px;
}
.gif:hover .gif__header,
.gif:hover .gif__footer,
.gif:hover .gif__details {
  visibility: visible;
}
.gif__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  visibility: hidden;
  min-height: 30px;
  background-color: rgba(0,0,0,0.4);
  color: white;
  position: absolute;
  top: 0;
  width: 290px;
  .gif__btn_detail {
    margin-right: 10px
  };
  .gif__title {
    margin-left: 10px;
    font-size: 12px
  };
  .gif__btn_favor {
    margin-right: 10px
  };
  .gif__btn_favor--save {
    color: rgb(248, 85, 85);
  }
}
.gif__image {
  display: flex;
  justify-content: center;
  align-items: center;
}
.gif__footer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  visibility: hidden;
  min-height: 30px;
  background-color: rgba(0,0,0,0.4);
  position: absolute;
  bottom: 0;
  width: 290px;
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