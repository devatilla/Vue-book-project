<template>
  <nav class="navbar navbar-expand-md custom-nav">
    <div class="container">
      <RouterLink class="navbar-brand" v-bind:to="{ name: 'home' }">{{ brandName }}</RouterLink>

      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <RouterLink class="nav-link" v-bind:to="{ name: 'home' }">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" v-bind:to="{ name: 'books' }">Books</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" v-bind:to="{ name: 'contact' }">Contact Us</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" v-bind:to="{ name: 'login' }">Login</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" v-bind:to="{ name: 'register' }">Register</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      brandName: "Bostorek",
    };
  },
};
</script>

<style scoped>
.custom-nav {
  background-color: #063547;
  padding: 15px 0;
}

.navbar-brand {
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  padding: 0;
  margin: 0;
}

.navbar-brand:hover {
  color: #44b89d;
}

.nav-link {
  color: #fff;
  font-size: 16px;
  padding: 10px 15px !important;
  text-align: center;
}

.nav-link:hover {
  color: #44b89d;
}

.active-link {
  color: #44b89d !important;
}
</style>
