export default class GifService {

  constructor(giphy) {
    this.gf = giphy
  }

  search(name, options) {
    return new Promise((resolve, reject) => {
      
      this.gf.search(name, options)
        .then(({data: gifs}) => resolve(gifs))
        .catch(err => reject(err))
       
    })
  }
}