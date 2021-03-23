<template>
 <button class="btn_icon">
   <slot></slot>
 </button>
</template>

<script>
export default {
  name: 'ButtonIcon',
  props: {
    icon: String,
    sizeIcon: {
      type: String,
      default: '1x',
      validator: function (value) {
        return /[0-9]x$/.test(value) || ['xs', 'sm', 'lg'].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.btn_icon {
  padding: 5px;
  background-color: transparent;
  border: none;
  color: white;
  border-radius: 100%;
  outline: none;
}
.btn_icon:active {
  background-color: rgba(0,0,0,0.2)
}
</style>