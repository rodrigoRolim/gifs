const state = {
  favorites: []
}

const getters = {
  favorites: state => state.favorites,
  isSaved: state => id => state.favorites.some(fv => fv.id === id)
}

const actions = {

}

const mutations = {
  saveFavorite(state, gif) {
    state.favorites.push(gif);
    console.log(state.favorites);
  },
  removeFavorite(state, id) {
    state.favorites = state.favorites.filter(fv => fv.id !== id);
    console.log(state.favorites);
  },
  updateFavorite(state, {id, newData}) {
    let gif = state.favorites.find(fv => fv.id === id);
    const keys = Object.keys(newData);
    for (const key in keys) {
      gif[key] = newData[key]
    }
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