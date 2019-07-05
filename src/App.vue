<template>
  <div>
    <nav>
      <router-link class="nav-button" to="/posts">Posts</router-link>
      <router-link class="nav-button" to="/add">Add</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav-button {
  justify-content: space-between
}
</style>
