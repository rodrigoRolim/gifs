<template>
  <div class="search">
    <input type="text" class="search__input" v-model="name" @keypress.enter="searchGifs"/>
    <i class="search__icon" @click="searchGifs"><font-awesome-icon icon="search" size="1x" /></i>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'GifSearch',
  data:() => ({
    name: ''
  }),
  methods: {
    async searchGifs() {
      console.log('oii')
      try {
        await this.listGifs({name: this.name, options: this.options})
      } catch(e) {
        console.log(e)
      }
     
    },
    ...mapActions('gifs', {
      listGifs: 'listGifs'
    })
  }
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  border: 2px solid rgb(109, 108, 114);
  width: 100%;
  border-radius: 4px;
}
.search__input {
  width: 100%;
  height: 35px;
  border: none;
  outline: none;
  padding-left: 7px;
  font-size: 1.0rem;
  font-weight: 600;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: white;
}
.search__icon {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(54, 52, 63);
  color: white;
  border-left: 2px solid rgb(54, 52, 63);
  width: 75px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;
}
.search__icon:active {
  opacity: 0.5;
}
</style>