<script setup lang="ts">
import { computed, ref } from 'vue'
import MoonImage from '@/assets/destination/image-moon.webp'
import MarsImage from '@/assets/destination/image-mars.webp'
import EuropaImage from '@/assets/destination/image-europa.webp'
import TitanImage from '@/assets/destination/image-titan.webp'
import { destinationStore } from '@/store/destination'
const placeActive = ref<string>('moon')

const placeChoice: string[] = ['moon', 'mars', 'europa', 'titan']
const placeImageArr = [MoonImage, MarsImage, EuropaImage, TitanImage]

const placeImage = computed(() => {
  return placeImageArr[placeChoice.indexOf(placeActive.value)]
})
const placeDetail = computed(() => {
  return destinationStore[placeChoice.indexOf(placeActive.value)]
})
</script>

<template>
  <section class="place-wrapper">
    <div class="title">
      <span class="title__num">01</span>
      <p class="title__text">Pick your destination</p>
    </div>
    <div class="place">
      <img class="place__image" :src="placeImage" alt="" />
      <article class="place__article">
        <ul class="place__choice">
          <li class="place__item" v-for="(place, index) in placeChoice" :key="index" @click="placeActive = place">
            <span class="item__text" :class="{ active: Boolean(placeActive === place) }">
              {{ place }}
            </span>
          </li>
        </ul>
        <h2 class="place__heading">{{ placeActive }}</h2>
        <p class="paragraph">{{ placeDetail.desc }}</p>
        <hr class="divider" />
        <div class="place__summary">
          <div class="place__estimate">
            <p class="estimate__title">AVG. DISTANCE</p>
            <p class="estimate__value">{{ placeDetail.distance }}</p>
          </div>
          <div class="place__estimate">
            <p class="estimate__title">Est. travel time</p>
            <p class="estimate__value">{{ placeDetail.travel_time }}</p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.item__text.active {
  text-decoration: underline;
  text-underline-offset: 8px;
  text-decoration-color: white;
}

.place__image {
  width: 170px;
  height: 170px;
  margin: 0 auto 26px auto;
  display: block;
}

.place__choice {
  width: fit-content;
  display: flex;
  gap: 26px;
  margin: 0 auto;
  margin-bottom: 20px;
}

.item__text {
  cursor: pointer;
}

.place__item .item__text {
  font-family: 'Barlow Condensed', sans-serif;
  text-transform: uppercase;
  color: white;
  font-size: 14px;
}

.place__heading {
  font-size: 56px;
  text-transform: uppercase;
  color: white;
  margin: 0 auto;
  display: block;
  width: fit-content;
  line-height: 64px;
}

.place__desc {
  margin: 0 24px;
  margin-bottom: 32px;
  text-align: center;
  font-size: 15px;
  line-height: 25px;
}

.divider {
  margin: 0 32px;
  margin-bottom: 32px;
  border: none;
  border-bottom: 1px solid #383b4b;
}

.place__estimate {
  margin-bottom: 32px;
}

.place__estimate .estimate__title {
  font-family: 'Barlow Condensed', sans-serif;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 12px;
}

.place__estimate .estimate__value {
  font-family: 'Bellefair', sans-serif;
  text-transform: uppercase;
  text-align: center;
  font-size: 28px;
  line-height: 32px;
}

@media screen and (min-width: 760px) {
  .place__image {
    width: 300px;
    height: 300px;
    margin-bottom: 54px;
  }

  .place__item .item__text {
    font-size: 16px;
  }

  .item__text.active {
    text-underline-offset: 12px;
    margin-bottom: 32px;
  }

  .place__heading {
    font-size: 80px;
    line-height: 92px;
  }

  .paragraph {
    width: 574px;
    margin: 0 auto;
    margin-bottom: 50px;
    display: block;
  }

  .place__summary {
    display: flex;
    justify-content: space-evenly;
    width: 574px;
    margin: 0 auto;
  }
}

@media screen and (min-width: 1024px) {
  .place-wrapper {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .place {
    padding: 0 5%;
    padding-bottom: 112px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
    gap: 5%;
  }

  .place__image {
    width: 445px;
    height: 445px;
    margin-top: auto;
    margin: auto;
  }

  .place__article {
    width: 445px;
    box-sizing: border-box;
    margin: auto;
  }

  .place__article .paragraph {
    width: 100%;
  }

  .place__choice {
    margin-left: 0;
    margin-bottom: 37px;
  }

  .place__heading {
    margin-left: 0;
    margin-bottom: 14px;
  }

  .divider {
    margin-top: 54px;
    margin-left: 0;
  }

  .place__summary {
    justify-content: start;
    gap: 80px;
  }
}
</style>
