<template>
  <div class="select">
    <label for="" class="select__label"></label>
    <div class="select__wrap">
      <select name="ex" id="ex" :class="{'select--empty': isEmpty}" @change="select">
        <option selected value="">{{placeholder}}</option>
        <option 
          class="select__option" 
          v-for="option of options" :key="option.id"
          :value="option.id" 
        >
          {{option.value}}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GSelect',
  props: {
    options: Array,
    placeholder: {
      type: String,
      default: 'selecione uma opção'
    }
  },
  data: () => ({
    isEmpty: true
  }),
  methods: {
    select(e) {
      const value = e.target.value;
      this.isEmpty = (value) ? false : true;
      this.$emit('selected', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.select__wrap::after {
  content: "";
  width: 0.8em;
  height: 0.5em;
  background-color: var(--select-arrow);
  clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  align-self: center;
  margin-right: 10px;
}
.select__wrap {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 39px;
  min-width: .5em;
  max-width: 100%;
  border: 2px solid var(--select-border);
  border-radius: 0.25em;
  font-size: .9rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
}
.select--empty {
  color: gray;
  font-size: 12px
}
select {
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0.29em 7px;
  margin: 0;
  width: 100%;
  font-weight: 600;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  outline: none;
  option {
    color: black;
  }
}
select:required:invalid {
  color: gray;
}
select::-ms-expand {
  display: none;
}
</style>