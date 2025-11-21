<script setup>
import OutlineButton from './buttons/OutlineButton.vue'
import SectionLabel from './SectionLabel.vue'
import DomeGallery from './DomeGallery.vue'
import { ref } from 'vue'

const images = ref([
  { src: 'https://api.builder.io/api/v1/image/assets/TEMP/506995054fec2c60033031ecab229938c1df722d?width=792', alt: 'Drone aerial photography' },
  { src: 'https://api.builder.io/api/v1/image/assets/TEMP/307f7d726da98d25a3d7afbab5acf7a2512ed447?width=876', alt: 'Professional drone operator' },
  { src: 'https://api.builder.io/api/v1/image/assets/TEMP/1bf0a13215a03880a6cfa10d11fa1d627cf6e4ca?width=816', alt: 'Drone in flight' },
  { src: 'https://api.builder.io/api/v1/image/assets/TEMP/03644084a0fd8b6fa374aafc9306767822eae530?width=764', alt: 'Aerial drone shot' },
  { src: 'https://api.builder.io/api/v1/image/assets/TEMP/b1cc194b4ca81ad46baf5ddb8f5c918933b7d326?width=692', alt: 'Person operating drone' },
  { src: 'https://api.builder.io/api/v1/image/assets/TEMP/8f81977224e5c284583f23081ac031693bd09f2a?width=760', alt: 'Drone operator in sunset' },
  { src: 'https://api.builder.io/api/v1/image/assets/TEMP/6da9614879d9bac418755ed625b1d8fe07aae119?width=768', alt: 'Drone surveying' },
  { src: 'https://api.builder.io/api/v1/image/assets/TEMP/f52b8c865d83fb3f3591efabd33e3ba0132cd784?width=704', alt: 'Multiple drones in flight' },
])
</script>

<template>
  <section class="portfolio-section">
    <div class="decorative-graphic-right">
      <svg class="geometric-pattern" viewBox="0 0 450 575" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.3">
          <path d="M225 50 L400 150 L400 350 L225 450 L50 350 L50 150 Z" stroke="#DCC62D" stroke-width="1"
            fill="none" />
          <path d="M225 100 L350 175 L350 325 L225 400 L100 325 L100 175 Z" stroke="#DCC62D" stroke-width="1"
            fill="none" />
          <path d="M225 150 L300 200 L300 300 L225 350 L150 300 L150 200 Z" stroke="#DCC62D" stroke-width="1"
            fill="none" />
          <line x1="225" y1="50" x2="225" y2="450" stroke="#DCC62D" stroke-width="1" />
          <line x1="50" y1="150" x2="400" y2="350" stroke="#DCC62D" stroke-width="1" />
          <line x1="400" y1="150" x2="50" y2="350" stroke="#DCC62D" stroke-width="1" />
          <circle cx="225" cy="50" r="4" fill="#DCC62D" />
          <circle cx="400" cy="150" r="4" fill="#DCC62D" />
          <circle cx="400" cy="350" r="4" fill="#DCC62D" />
          <circle cx="225" cy="450" r="4" fill="#DCC62D" />
          <circle cx="50" cy="350" r="4" fill="#DCC62D" />
          <circle cx="50" cy="150" r="4" fill="#DCC62D" />
        </g>
      </svg>
    </div>

    <div class="decorative-graphic-left">
      <svg class="dot-pattern" viewBox="0 0 300 350" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.2">
          <circle cx="150" cy="175" r="120" stroke="#DCC62D" stroke-width="0.5" fill="none" />
          <circle cx="150" cy="175" r="100" stroke="#DCC62D" stroke-width="0.5" fill="none" />
          <circle cx="150" cy="175" r="80" stroke="#DCC62D" stroke-width="0.5" fill="none" />
          <circle cx="150" cy="175" r="60" stroke="#DCC62D" stroke-width="0.5" fill="none" />
          <circle cx="150" cy="175" r="40" stroke="#DCC62D" stroke-width="0.5" fill="none" />
          <circle cx="150" cy="175" r="20" stroke="#DCC62D" stroke-width="0.5" fill="none" />
        </g>
      </svg>
    </div>

    <div class="geo-shape right-bottom-geo">
      <img src="/src/assets/getintouch/bg-geometric-2.png" alt="" />
    </div>

    <div class="portfolio-container">
      <SectionLabel>PORTFOLIO</SectionLabel>
      <h2 class="section-title">
        <span class="title-highlight">Recent Flights &</span> Projects
      </h2>

      <div class="gallery-wrapper">
        <DomeGallery
          :images="images"
          :grayscale="true"
          overlay-blur-color="#181818"
          :segments="35"
          :fit="0.65"
          :minRadius="700"
          :padFactor="0.15"
        />
      </div>

      <div class="button-wrapper">
        <OutlineButton>See More</OutlineButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.portfolio-section {
  position: relative;
  width: 100%;
  padding: 120px 6% 140px;
  background: #181818;
  overflow: hidden;
}

.decorative-graphic-right {
  position: absolute;
  top: 80px;
  right: -100px;
  width: 450px;
  height: 575px;
  pointer-events: none;
  z-index: 1;
  transform: rotate(-136deg);
}

.geometric-pattern {
  width: 100%;
  height: 100%;
}

.decorative-graphic-left {
  position: absolute;
  bottom: -100px;
  left: -50px;
  width: 300px;
  height: 350px;
  pointer-events: none;
  z-index: 1;
  transform: rotate(5deg);
}

.dot-pattern {
  width: 100%;
  height: 100%;
}

.portfolio-container {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  color: #FFF;
  text-shadow: 0 6px 4.4px rgba(0, 0, 0, 0.24);
  font-family: 'Oswald', -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 50px;
  font-weight: 250;
  line-height: 1.42;
  text-transform: uppercase;
  margin: 0 0 60px 0;
}

.title-highlight {
  font-weight: 500;
}

.gallery-wrapper {
  width: 100%;
  height: 750px;
  margin-bottom: 60px;
}

.button-wrapper {
  display: flex;
  justify-content: center;
}

.geo-shape {
  position: absolute;
  pointer-events: none;
  z-index: 1;
}

.right-bottom-geo {
  bottom: -100px;
  right: -80px;
  width: 400px;
  height: 400px;
}

.right-bottom-geo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@media (max-width: 1200px) {
  .portfolio-section {
    padding: 100px 5% 120px;
  }

  .portfolio-container {
    max-width: 100%;
  }

  .decorative-graphic-right {
    width: 380px;
    height: 485px;
    right: -80px;
  }

  .gallery-wrapper {
    height: 650px;
  }
}

@media (max-width: 1024px) {
  .section-title {
    font-size: 42px;
    margin-bottom: 50px;
  }

  .decorative-graphic-right {
    width: 320px;
    height: 410px;
    right: -60px;
  }

  .decorative-graphic-left {
    width: 250px;
    height: 290px;
    left: -40px;
  }

  .gallery-wrapper {
    height: 550px;
  }
}

@media (max-width: 768px) {
  .portfolio-section {
    padding: 80px 4% 100px;
  }

  .section-label {
    font-size: 18px;
  }

  .section-title {
    font-size: 36px;
    margin-bottom: 40px;
  }

  .decorative-graphic-right {
    width: 250px;
    height: 320px;
    right: -50px;
    top: 60px;
  }

  .decorative-graphic-left {
    width: 200px;
    height: 230px;
    left: -30px;
  }

  .gallery-wrapper {
    height: 500px;
    margin-bottom: 50px;
  }
}

@media (max-width: 480px) {
  .portfolio-section {
    padding: 3rem 8% 2.5rem;
  }

  .section-label {
    font-size: 16px;
  }

  .section-title {
    font-size: 28px;
    line-height: 1.3;
    margin-bottom: 30px;
  }

  .decorative-graphic-right {
    width: 180px;
    height: 230px;
    right: -40px;
    opacity: 0.5;
  }

  .decorative-graphic-left {
    width: 150px;
    height: 175px;
    left: -25px;
    opacity: 0.5;
  }

  .gallery-wrapper {
    height: 450px;
    margin-bottom: 40px;
  }
}
</style>