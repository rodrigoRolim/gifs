import { Giphy } from '../services';

const state = {
  gifs: [],
  total: 0,
  status: '',
  options: {
    sort: 'recent',
    lang: 'en',
    offset: 0,
    limit: 10,
    rating: 'PG'
  }
}

const getters = {
  gifs: (state) => state.gifs,
  status: (state) => state.status,
  total: (state) => state.total,
  numberOfGifs: (state) => state.gifs.length
}

const actions = {
  listGifs({ commit, state }, { name, options = state.options }) {
    commit('status', 'loading');
    commit('reinitOffset');
    commit('cleanGifs');
    return new Promise((resolve, reject) => {
      Giphy.search(name, options)
        .then(res => {
          const { data } = res;
          const { pagination: { total_count } } = res
          commit('total', total_count);
          commit('setGifs', data);
          commit('name', name);
          commit('options', options);
          commit('status', 'ok')
          resolve(data);
        })
        .catch(err => {
          commit('status', 'error')
          reject(err)
        })
    })
  },
  loadMoreGifs({ commit, state }) {
    commit('status', 'loading');
    commit('incrementOffset');
    return new Promise((resolve, reject) => {
      Giphy.search(state.name, state.options)
        .then(res => {
          const { data } = res;
          const { pagination: { total_count } } = res

          commit('total', total_count);
          commit('pushGifs', data);
          commit('status', 'ok')
          resolve(data);
        })
        .catch(err => {
          commit('status', 'error')
          reject(err)
        })
    })
  }
}

const mutations = {
  total(state, total) {
    state.total = total;
  },
  setGifs(state, gifs) {
    state.gifs = gifs;
  },
  pushGifs(state, gifs) {
    state.gifs.push(...gifs);
    console.log(state.gifs)
  },
  name(state, name) {
    state.name = name;
  },
  options(state, options) {
    state.options = options;
  },
  updateSort(state, newSort) {
    state.sort = newSort;
  },
  updateRating(state, newRating) {
    state.rating = newRating;
  },
  updateLanguage(state, newLangs) {
    state.lang = newLangs
  },
  incrementOffset(state) {
    state.options.offset += 10
  },
  reinitOffset(state) {
    state.options.offset = 0
  },
  cleanGifs(state) {
    state.gifs = []
  },
  status(state, status) {
    state.status = status;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}