<script setup lang="ts"></script>

<template>
  <div class="home__wrapper">
    <section class="hero">
      <p class="hero__placeholder">SO, YOU WANT TO TRAVEL TO</p>
      <h1 class="hero__heading">SPACE</h1>
      <p class="paragraph">
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and
        not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly
        out of this world experience!
      </p>
    </section>
    <section class="explore">
      <h2 class="explore__label">EXPLORE</h2>
    </section>
  </div>
</template>

<style scoped>
.home--main {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url('@/assets/home/background-home-mobile.jpg');
}

.hero {
  margin-top: 24px;
  padding: 24px;
}

.hero__placeholder {
  font-size: 16px;
  text-align: center;
}

.hero__heading {
  font-size: 80px;
  line-height: 100px;
  color: white;
  text-align: center;
}

.explore {
  width: 150px;
  height: 150px;
  border-radius: 100%;
  background-color: white;
  display: grid;
  place-items: center;
  margin: 81px auto 48px auto;
  position: relative;
  z-index: 55;
  cursor: pointer;
}

.explore:hover::before {
  content: '';
  display: block;
  position: absolute;
  inset: 0;
  left: -25%;
  top: -25%;
  border-radius: 100%;
  width: 150%;
  height: 150%;
  background-color: rgba(255, 255, 255, 0.25);
  transform: translateX();
  z-index: -2;
}

.explore:hover::after {
  content: '';
  display: block;
  position: absolute;
  inset: 0;
  left: 0;
  top: 0;
  border-radius: 100%;
  width: 100%;
  height: 100%;
  background-color: white;
  transform: translateX();
  z-index: -1;
}

.explore__label {
  font-size: 20px;
}

@media screen and (min-width: 760px) {
  .hero {
    padding-top: 106px;
    max-width: 450px;
    margin: 0 auto;
  }

  .hero__placeholder {
    font-size: 20px;
    margin-bottom: 24px;
  }

  .hero__heading {
    font-size: 150px;
    line-height: 150px;
    margin-bottom: 24px;
  }

  .explore {
    width: 242px;
    height: 242px;
    margin-top: 10%;
  }
}

@media screen and (min-width:1024px) {
  .home__wrapper {
    flex-grow: 1;
    display: flex;
    align-items: center;
    box-sizing: border-box;
  }

  .hero__placeholder {
    text-align: left;
  }

  .hero__heading {
    text-align: left;
  }

}
</style>
