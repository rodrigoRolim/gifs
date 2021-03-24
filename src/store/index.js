import { createStore } from 'vuex'
import gifs from './gifs';
import favorites from './favorites';

export default createStore({
  modules: {
    favorites,
    gifs
  }
})
