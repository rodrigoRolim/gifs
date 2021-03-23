<template>
  <header class="navbar">
    <g-select class="navbar__select" placeholder="classificação" :options="getRatings" @selected="updateRating"/>
    <g-select class="navbar__select" placeholder="idioma" />
    <gif-search class="navbar__search" />
    <div class="navbar__navigation">
      <!-- <router-link to="#">buscar</router-link> -->
      <router-link to="#">tendências</router-link>
      <router-link to="#">favoritos</router-link>
    </div>
  </header>
</template>

<script>
import { Ratings } from '../services/ratings';
import GifSearch from './GifSearch';
import GSelect from './base/GSelect';
import { mapMutations } from 'vuex';

export default {
  name: 'TheNavbar',
  components: {
    GifSearch,
    GSelect
  },
  computed: {
    getRatings() {
      return Ratings;
    }
  },
  methods: {
    ...mapMutations('gifs', [
      'updateRating'
    ])
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  align-self: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5px;
  font-weight: bold;
  width: 1040px;
  user-select: none;
  .navbar__navigation {
    display: flex;
    justify-content: flex-end;
    width: 235px;
    a {
      color: #b4b4b4;
      text-decoration: none;
      font-size: 14px;
      margin-left: 15px;
    };
    a:hover {
      color: white;
    }
  };
  .navbar__select {
    width: 10em
  };
  .navbar__search {
    width: 420px
  }
}
</style>