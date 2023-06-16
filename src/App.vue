<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import SpaceNavbar from './components/SpaceNavbar.vue'
import { ref, watchEffect } from 'vue'

const route = useRoute()
const backgroundLocation = ref<string>('main-home')

watchEffect(() => {
  if (route.path === '/') {
    backgroundLocation.value = 'main--home'
  }
  if (route.path === '/destination') {
    backgroundLocation.value = 'main--destination'
  }
  if (route.path === '/crew') {
    backgroundLocation.value = 'main--crew'
  }
  if (route.path === '/technology') {
    backgroundLocation.value = 'main--technology'
  }
})
</script>

<template>
  <main class="main" :class="backgroundLocation">
    <SpaceNavbar />
    <RouterView />
  </main>
</template>

<style>
:root {
  --paragraph-color: #d0d6f9;
}

.main {
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}

.main--home {
  background-image: url('@/assets/home/background-home-mobile.jpg');
}

.main--destination {
  background-image: url('@/assets/destination/background-destination-mobile.jpg');
}

.main--crew {
  background-image: url('@/assets/crew/background-crew-mobile.jpg');
}

.main--technology {
  background-image: url('@/assets/technology/background-technology-mobile.jpg');
}

@media screen and (min-height: 645px) and (max-width: 768px) {
  .main {
    height: 100vh;
  }
}

@media screen and (min-height: 1022px) and (min-width: 767px) {
  .main {
    height: 100vh;
  }
}

@media screen and (min-width: 760px) {
  .main--home {
    background-image: url('@/assets/home/background-home-tablet.jpg');
  }

  .main--destination {
    background-image: url('@/assets/destination/background-destination-tablet.jpg');
  }

  .main--crew {
    background-image: url('@/assets/crew/background-crew-tablet.jpg');
  }

  .main--technology {
    background-image: url('@/assets/technology/background-technology-tablet.jpg');
  }
}


@media screen and (min-width: 1024px) {
  .main {
    height: 100%;
    min-height: 100vh;
    background-size: cover;
  }

  .main--home {
    background-image: url('@/assets/home/background-home-desktop.jpg');
  }

  .main--destination {
    background-image: url('@/assets/destination/background-destination-desktop.jpg');
  }

  .main--technology {
    background-image: url('@/assets/technology/background-technology-desktop.jpg');
  }
}
</style>
