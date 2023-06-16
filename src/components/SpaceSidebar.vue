<script setup lang="ts">
const emits = defineEmits<{
  close: [value: false]
}>()
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__close">
      <img
        class="close__img"
        src="@/assets/shared/icon-close.svg"
        alt="close sidebar"
        @click="(e) => emits('close', false)"
      />
    </div>
    <ul class="route">
      <li class="route__item" @click="$router.push('/')"><span class="item__num">00</span> Home</li>
      <li class="route__item" @click="$router.push('/destination')">
        <span class="item__num">01</span> Destination
      </li>
      <li class="route__item" @click="$router.push('/crew')">
        <span class="item__num">02</span> Crew
      </li>
      <li class="route__item" @click="$router.push('/technology')">
        <span class="item__num">03</span> Technology
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 70vw;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  backdrop-filter: blur(40px);
  z-index: 999;
}

.sidebar__close {
  height: 88px;
  display: flex;
  align-items: center;
  padding: 0 24px;
}

.close__img {
  display: block;
  margin-left: auto;
}

.route {
  margin: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.route__item {
  color: white;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 16px;
  text-transform: uppercase;
}

.route__item .item__num {
  color: white;
  font-weight: bolder;
}

@media screen and (min-width: 760px) {
  .sidebar {
    display: none;
  }
}
</style>
