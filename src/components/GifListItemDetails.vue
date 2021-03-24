<template>
  <div class="gif_details">
    <div class="gif_details__dimensions">
      <p>Dimensions: {{width}} x {{height}} px</p>
      <p>Size: {{size}} kb</p>
      <p>Frames: 2</p>
    </div>
    <div class="gif_details__infos">
      <p>Uploaded: {{dateFormatter(uploaded)}}</p>
      <p>Rating: {{uppercase(rating)}}</p>
      <p>Flag this GIF</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GifDetails',
  props: {
    width: String,
    height: String,
    size: String,
    uploaded: String,
    rating: String
  },
  methods: {
    dateFormatter(dateString) {
      const date = new Date(dateString).toLocaleDateString("pt-BR");
      return date !== "Invalid Date" ? date : "";
    },
    uppercase(word) {
      return word.toUpperCase();
    }
  }
}
</script>

<style lang="scss" scoped>
.gif_details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  z-index: 100;
  background-color: rgba(0,0,0,0.4) ;
  animation: enter 0.4s linear;
  height: 18vh;
  padding: 5px
}
.gif_details__dimensions,
.gif_details__infos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: white;
  font-size: 0.8em;
}
</style>