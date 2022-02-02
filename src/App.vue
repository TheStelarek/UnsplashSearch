<template>
  <div id="app">
    <NavBar />
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import NavBar from './components/Navbar'
export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@media (max-width: 900px) {
  html {
    font-size: 14px;
  }
}
@media (max-width: 600px) {
  html {
    font-size: 12px;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 1.2rem;
}

.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}

.button {
  display: inline-block;
  font-family: 'Montserrat', 'Trebuchet MS', Helvetica, sans-serif;
  padding: 0.6rem 1.5rem;
  background: #42b983;
  border: none;
  color: white;
  transition: 0.2s;
  text-align: center;
}
a {
  text-decoration: none;
}
</style>
