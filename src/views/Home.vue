<template>
  <the-navbar>
    <template v-slot:filters>
      <div class="navbar__filters">
        <g-select class="navbar__select" placeholder="classificação" :options="getRatings" @selected="updateRating"/>
        <g-select class="navbar__select" placeholder="idioma" :options="getLanguages" @selected="updateLanguage"/>
        <gif-search class="navbar__search" />
      </div>
    </template>
  </the-navbar>
  <div class="home" v-if="gifs">
    <gif-list :gifs="gifs"/>
  </div>
</template>

<script>
import TheNavbar from '../components/TheNavbar'
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';
import GSelect from '../components/base/GSelect';
import { mapGetters, mapMutations } from 'vuex';
import { Ratings } from '../services/ratings';
import { Languages } from '../services/langs';

export default {
  name: 'Home',
  components: {
    GifList,
    GifSearch,
    GSelect,
    TheNavbar
  },
  computed: {
    ...mapGetters('gifs', [
      'gifs'
    ]),
    getRatings() {
      return Ratings;
    },
    getLanguages() {
      return Languages
    }
  },
  methods: {
    ...mapMutations('gifs', [
      'updateRating',
      'updateLanguage'
    ])
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 70.5px);
}
.navbar__select {
  width: 25%;
  @include respond-to(medium-screens) {
    width: 25%
  }
};
.navbar__search {
  width: 45%;
  @include respond-to(medium-screens) {
    width: 45%
  }
}
.navbar__filters {
  display: flex;
  justify-content: space-between;
  width: 100%;
  @include respond-to(medium-screens) {
    width: 100%
  }
} 
</style>