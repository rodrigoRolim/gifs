<template>
  <header class="navbar">
    <div class="navbar__content">
      <slot name="filters"></slot>
      <div class="navbar__navigation">
        <router-link to="/favoritos">
          <span class="navbar__link">favoritos</span>
          <i class="navbar__icon"><font-awesome-icon icon="heart" size="2x" /></i>
        </router-link>
        <router-link to="/">
          <span class="navbar__link">buscar</span>
          <i class="navbar__icon"><font-awesome-icon icon="search" size="2x" /></i>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheNavbar'
}
</script>

<style lang="scss" scoped>
.navbar {
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 25px;
  font-weight: bold;
  width: 100%;
  border-bottom: 1.5px solid #fafafa2d;
  user-select: none;
  .navbar__content {
    width: 100%;
    display: flex;
    justify-content: inherit;
    align-items: inherit;
  }
  .navbar__navigation {
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
    width: 10em;
    a {
      color: #b4b4b4;
      text-decoration: none;
      font-size: 14px;
      margin-left: 15px;
    };
    a:hover {
      color: white;
    };
    .navbar__link {
      @include respond-to(handhelds) {
        display: none;
      }
    };
    .navbar__icon {
      display: none;
      @include respond-to(handhelds) {
        display: block;
      }
    }
  }
}
</style>