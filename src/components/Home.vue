<template>
  <div>
    <Haha />
    <h1>Home</h1>
    <div class="navbar-start">
      <router-link class="navbar-item" to="/">Home</router-link>
      <router-link class="navbar-item" to="/foo">Foo</router-link>
      <router-link class="navbar-item" to="/bar">Bar</router-link>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Haha from "./Haha";

export default {
  components: {
    Haha
  }
};
</script>