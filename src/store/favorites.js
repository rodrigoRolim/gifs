const state = {
  favorites: []
}

const getters = {
  favorites: state => state.favorites,
  isSaved: state => id => state.favorites.some(fv => fv.id === id),
  findNameById: state => id => state.favorites.find(fv => fv.id === id).title
}

const actions = {

}

const mutations = {
  saveFavorite(state, gif) {
    const favorite = JSON.parse(gif);
    state.favorites.push(favorite);
    console.log(state.favorites);
  },
  removeFavorite(state, id) {
    state.favorites = state.favorites.filter(fv => fv.id !== id);
    console.log(state.favorites);
  },
  updateFavoriteName(state, {id, newName}) {
    let gif = state.favorites.find(fv => fv.id === id);
    gif.title = newName;
  },
  removeAllFavorites(state) {
    state.favorites = []
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}