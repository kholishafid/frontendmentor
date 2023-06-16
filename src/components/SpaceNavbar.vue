<script setup lang="ts">
import { ref } from 'vue'
import SpaceSidebar from './SpaceSidebar.vue'
import { RouterLink } from 'vue-router'
const sidebarActive = ref<boolean>(false)
</script>

<template>
  <nav class="navbar">
    <img src="@/assets/shared/logo.svg" class="logo" alt="Space Tourism Logo" />
    <img
      src="@/assets/shared/icon-hamburger.svg"
      alt="Space - Hamburger"
      @click="sidebarActive = true"
      class="navbar__hamburger"
    />
    <ul class="navbar__route">
      <li class="route__item">
        <RouterLink class="route__link" to="/">Home</RouterLink>
      </li>
      <li class="route__item">
        <RouterLink class="route__link" to="/destination" exact>Destination</RouterLink>
      </li>
      <li class="route__item">
        <RouterLink class="route__link" to="/crew">Crew</RouterLink>
      </li>
      <li class="route__item">
        <RouterLink class="route__link" to="/technology">Technology</RouterLink>
      </li>
    </ul>
  </nav>
  <SpaceSidebar @close="(event) => (sidebarActive = event.value)" v-if="sidebarActive" />
</template>

<style scoped>
.navbar {
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  width: 40px;
  height: 40px;
}
.navbar__route {
  padding: 40px 48px;
  display: none;
  gap: 38px;
  background-color: rgba(255, 255, 255, 0.1);
}
.navbar__route .route__link {
  text-transform: uppercase;
  color: white;
  font-family: 'Barlow Condensed', sans-serif;
}
.route__link {
  text-decoration: none;
}
@media screen and (min-width: 760px) {
  .navbar {
    padding: 0;
  }
  .logo {
    width: 48px;
    height: 48px;
    padding-left: 40px;
  }
  .navbar__hamburger {
    display: none;
  }
  .navbar__route {
    display: flex;
  }
  .router-link-exact-active {
    text-decoration: underline;
    text-decoration-color: white;
    text-underline-offset: 38px;
    text-decoration-thickness: 3px;
  }
}
</style>
