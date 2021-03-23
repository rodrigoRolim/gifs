export default class GifService {

  constructor(giphy) {
    this.gf = giphy
  }

  search(name, options) {
    return new Promise((resolve, reject) => {
      
      this.gf.search(name, options)
        .then((res) => resolve({gifs: res.data, total: res.pagination.total_count}))
        .catch(err => reject(err))
       
    })
  }
}