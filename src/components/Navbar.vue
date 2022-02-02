<template>
  <div id="nav">
    <router-link to="/" v-if="this.$route.name === 'Home'"
      >Hickari Unsplash Search</router-link
    >
    <router-link to="/" v-if="this.$route.name !== 'Home'">Back</router-link>
  </div>
</template>

<style lang="scss">
#nav {
  padding: 30px;
  display: flex;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
