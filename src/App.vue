<template>
  <div id="app">
    <nav class="bg-black text-white shadow">
        <div class="container flex items-center justify-center p-6 mx-auto text-5xl capitalize dark:text-gray-300">
            <h1>Where in the world !</h1>
        </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: black;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
