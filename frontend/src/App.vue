<template>
  <Navbar />
  <div class="container">
    <RouterView></RouterView>
  </div>
</template>

<script>
import Navbar from "./component/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap");
html,
body {
  font-family: "Mulish", sans-serif;
}
a {
  text-decoration: none !important;
}
</style>
