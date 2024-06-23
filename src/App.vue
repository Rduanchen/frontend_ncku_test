<template>
  <router-view></router-view>
  <NavBar class="navbar"></NavBar>
  <!-- <PriceOverview></PriceOverview> -->
</template>

<script>
import NavBar from './components/NavBar.vue'
// import PriceOverview from './pages/PriceOverview.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    // PriceOverview
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar{
  z-index: 1000;
  position: fixed;
  top: 0;
}
.render{
  margin-top: 5em;
}
</style>
