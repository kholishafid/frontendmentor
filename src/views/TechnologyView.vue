<script setup lang="ts">
import { technologyStore } from '@/store/technology'
import { computed, ref } from 'vue'

const state = ref<number>(0)

const technologyDetail = computed(() => {
  return technologyStore[state.value]
})
</script>

<template>
  <section class="technology-wrapper">
    <div class="title">
      <span class="title__num">03</span>
      <p class="title__text">Space launch 101</p>
    </div>
    <div class="technology">
      <div>
        <img class="technology__image" :src="technologyDetail.img" :alt="technologyDetail.name" />
      </div>
      <section class="technology__content">
        <div class="technology__navigation">
          <div class="technology__switch" v-for="index in 3" :key="index"
            :class="{ 'technology__switch--active': state + 1 === index }" @click="state = index - 1">
            {{ index }}
          </div>
        </div>
        <div class="technology__detail">
          <p class="technology__placeholder">THE TERMINOLOGY…</p>
          <h3 class="technology__title">{{ technologyDetail.name }}</h3>
          <p class="technology__desc">
            {{ technologyDetail.desc }}
          </p>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped>
.technology__image {
  width: 100vw;
}

.technology__navigation {
  width: fit-content;
  display: flex;
  gap: 16px;
  margin: 34px auto 26px auto;
}

.technology__switch {
  height: 40px;
  width: 40px;
  border-radius: 100%;
  border: 1px solid #979797;
  display: grid;
  place-items: center;
  color: white;
}

.technology__switch--active {
  background-color: white;
  border-color: white;
  color: black;
}

.technology__placeholder {
  text-align: center;
  font-size: 14px;
  margin-bottom: 8px;
}

.technology__title {
  color: white;
  font-size: 24px;
  margin-bottom: 16px;
  text-align: center;
}

.technology__desc {
  font-size: 15px;
  line-height: 25px;
  margin: 0 54px 0px 54px;
  padding-bottom: 81px;
  text-align: center;
}

@media screen and (min-width: 768px) {
  .technology__desc {
    margin: 0 126px;
  }
}

@media screen and (min-width: 1024px) {
  .technology {
    display: flex;
    margin: 0 auto;
    flex-direction: row-reverse;
  }

  .technology__image {
    width: 400px;
    aspect-ratio: 1/1;
  }

  .technology__content {
    display: flex;
  }

  .technology__placeholder {
    margin: 0 auto;
    width: 470px;
    text-align: left;
  }

  .technology__detail {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .technology__navigation {
    margin: 0;
    flex-direction: column;
    justify-content: center;
  }

  .technology__title {
    width: 470px;
    text-align: start;
    margin: 0 auto;
  }

  .technology__desc {
    width: 470px;
    text-align: start;
    padding: 0;
  }

  .technology__title {
    font-size: 56px;
    margin-top: 11px;
    margin-bottom: 17px;
    line-height: 64px;
  }

  .technology__switch {
    width: 70px;
    height: 70px;
    font-size: 1.5rem;
  }
}
</style>
