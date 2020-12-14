<template>
  <div>
    <h1>Home</h1>
    <div class="navbar-start">
      <router-link class="navbar-item" to="/">Home</router-link>
      <router-link class="navbar-item" to="/foo">Foo</router-link>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>