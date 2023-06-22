<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { crewStore } from '@/store/crew'

const crewIndex = ref<number>(0)

const crewData = computed(() => {
  return crewStore[crewIndex.value]
})

watchEffect(() => {
  if (crewIndex.value >= 4) {
    crewIndex.value = 0
  }
})
</script>

<template>
  <section class="crew-wrapper">
    <div class="title">
      <span class="title__num">02</span>
      <p class="title__text">Meet your crew</p>
    </div>
    <div class="crew">
      <img
        class="crew__image"
        :src="crewData.img"
        :alt="crewData.name"
        draggable="false"
      />
      <article class="crew__article">
        <div class="slide-nav">
          <div
            class="slide-nav__item"
            :class="{ 'item--active': index === crewIndex }"
            v-for="(_, index) in 4"
            :key="index"
            @click="crewIndex = index"
          ></div>
        </div>
        <section>
          <p class="crew__role">{{ crewData.role }}</p>
          <h3 class="crew__name">{{ crewData.name }}</h3>
          <p class="paragraph">
            {{ crewData.desc }}
          </p>
        </section>
      </article>
    </div>
  </section>
</template>

<style scoped>
.crew-wrapper {
  padding-bottom: 24px;
}

.crew {
  display: flex;
  flex-direction: column;
}

.crew__image {
  display: block;
  height: 222px;
  width: calc(100% - 24px * 2);
  object-fit: contain;
  margin: 0 24px;
  border-bottom: 1px solid #979797;
}

.slide-nav {
  width: fit-content;
  display: flex;
  gap: 16px;
  margin: 32px auto;
}

.slide-nav__item {
  width: 10px;
  height: 10px;
  background-color: #979797;
  border-radius: 100%;
  cursor: pointer;
}

.slide-nav__item:hover {
  background-color: #d8d8d8;
}

.item--active {
  background-color: white;
}

.crew__role {
  text-align: center;
  font-size: 16px;
  font-family: 'Bellefair', sans-serif;
  color: #979797;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.crew__name {
  margin: 0 8px;
  text-align: center;
  font-size: 24px;
  line-height: 28px;
  color: white;
}

.crew__desc {
  margin: 8px 24px;
  text-align: center;
  font-size: 16px;
  line-height: 25px;
}

@media screen and (min-width: 760px) {
  .crew {
    flex-direction: column-reverse;
  }

  .crew__image {
    height: 45%;
    position: absolute;
    bottom: 0%;
  }

  .crew__role {
    font-size: 24px;
  }

  .crew__name {
    font-size: 40px;
    margin-top: 8px;
    margin-bottom: 16px;
    line-height: 45px;
  }
}

@media screen and (min-width: 1024px) {
  .crew {
    display: flex;
    flex-direction: row-reverse;
    padding: 0 5%;
    gap: 5%;
  }

  .crew__image {
    width: fit-content;
    position: relative;
  }

  .crew__article {
    display: flex;
    flex-direction: column-reverse;
    margin: auto 0;
    height: 100%;
  }

  .crew__role {
    font-size: 32px;
    text-align: left;
    margin-bottom: 15px;
  }

  .crew__name {
    font-size: 56px;
    text-align: left;
    margin-bottom: 24px;
    line-height: 64.18px;
  }

  .slide-nav {
    margin-top: 120px;
    margin-left: 0;
  }
}
</style>
