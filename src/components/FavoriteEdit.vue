<template>
  <div class="favor_edit">
    <form action="" class="favor_edit__form">
      <fieldset class="favor_edit__set">
        <legend class="favor_edit__legend">Atualizar nome do Gif</legend>
        <input class="favor_edit__input" 
          v-model="currentName"
          autofocus
        />
        <button-icon class="favor_edit__btn" @click.stop.prevent="confirm">
          <font-awesome-icon icon="thumbs-up" size="lg" />
        </button-icon>
      </fieldset>
    </form>
  </div>
</template>

<script>
import ButtonIcon from './base/ButtonIcon';
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: 'FavoriteEdit',
  props: {
    updateId: String
  },
  components: {
    ButtonIcon
  },
  data: () =>({
    name: ''
  }),
  computed: {
    ...mapGetters('favorites', [
      'findNameById'
    ]),
    currentName: {
      set(value) {
        this.name = value;
      },
      get() {
        return this.findNameById(this.updateId);
      }
    }
  },
  methods: {
    setNewName(newName) {
      
      this.updateFavoriteName({id: this.updateId, newName});
    },
    confirm() {
      this.setNewName(this.name)
      this.$emit('selfClose', false);
    },
    ...mapMutations('favorites', [
      'updateFavoriteName'
    ])
  }
}
</script>

<style lang="scss" scoped>
.favor_edit {
  display: flex;
  justify-content: center;
  min-height: 100vh;

  overflow: auto;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
  color: white;
  
}
.favor_edit__form {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.8);
  height: 100px;
  width: 300px;
}
.favor_edit__input {
  background-color: transparent;
  color: inherit;
  border: none;
  border-bottom: 1px solid;
  outline: none;
  width: 100%;
}
.favor_edit__set {
  display: flex;
  width: 100%;
  border: none;
  padding: 20px 10px;
}
.favor_edit__legend {
  text-transform: uppercase;
}
.favor_edit__btn {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  cursor: pointer
}
</style>