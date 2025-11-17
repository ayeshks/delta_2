<script setup>
import OutlineButton from './buttons/OutlineButton.vue'
import SectionLabel from './SectionLabel.vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Images source list
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

// Mobile-only single-image navigation
const currentIndex = ref(0)
const isSmallScreen = ref(false)

const updateIsSmall = () => {
  isSmallScreen.value = window.innerWidth <= 480
}

onMounted(() => {
  updateIsSmall()
  window.addEventListener('resize', updateIsSmall)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateIsSmall)
})

const displayedImages = computed(() => (isSmallScreen.value ? [images.value[currentIndex.value]] : images.value))

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length
}

const previousImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length
}
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

    <div class="portfolio-container">
      <SectionLabel>PORTFOLIO</SectionLabel>
      <h2 class="section-title">
        <span class="title-highlight">Recent Flights &</span> Projects
      </h2>

      <div class="portfolio-grid">
        <!-- Render all images on md/lg, only one on sm with arrows -->
        <div class="portfolio-item" v-for="(img) in displayedImages" :key="img.src">
          <img :src="img.src" :alt="img.alt" />
        </div>
      </div>

      <!-- Navigation arrows: visible only on small screens -->
      <div class="navigation-arrows" v-if="isSmallScreen">
        <button class="arrow-btn" aria-label="Previous image" @click="previousImage">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 6l-6 6 6 6" stroke="#DCC62D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <button class="arrow-btn" aria-label="Next image" @click="nextImage">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6l6 6-6 6" stroke="#DCC62D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
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

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 60px;
}

.portfolio-item {
  position: relative;
  width: 100%;
  aspect-ratio: 1.128;
  overflow: hidden;
  background: #D9D9D9;
}

.portfolio-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) contrast(1.1);
  mix-blend-mode: luminosity;
  transition: all 0.4s ease;
}

.portfolio-item:hover img {
  filter: grayscale(0%) contrast(1);
  mix-blend-mode: normal;
  transform: scale(1.05);
}

.button-wrapper {
  display: flex;
  justify-content: center;
}

@media (max-width: 1200px) {
  .portfolio-section {
    padding: 100px 5% 120px;
  }

  .portfolio-container {
    max-width: 100%;
  }

  .portfolio-grid {
    gap: 16px;
  }

  .decorative-graphic-right {
    width: 380px;
    height: 485px;
    right: -80px;
  }
}

@media (max-width: 1024px) {
  .section-title {
    font-size: 42px;
    margin-bottom: 50px;
  }

  .portfolio-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
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

  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-bottom: 50px;
  }

  .btn-see-more {
    width: 100%;
    max-width: 280px;
    height: 56px;
    font-size: 16px;
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
}

@media (max-width: 480px) {
  .portfolio-section {
    padding: 60px 3% 80px;
  }

  .section-label {
    font-size: 16px;
  }

  .section-title {
    font-size: 28px;
    line-height: 1.3;
    margin-bottom: 30px;
  }

  .portfolio-grid {
    grid-template-columns: 1fr;
    gap: 10px;
    margin-bottom: 40px;
  }

  .portfolio-item {
    aspect-ratio: 1.3;
  }

  .btn-see-more {
    width: 100%;
    height: 52px;
    font-size: 15px;
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
}

.navigation-arrows {
  display: none;
  justify-content: center;
  gap: 12px;
  margin: 10px 0 24px;
}

.arrow-btn {
  width: 36px;
  height: 36px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.arrow-btn:hover {
  transform: scale(1.1);
  opacity: 0.8;
}

.arrow-btn svg {
  width: 100%;
  height: 100%;
}

@media (max-width: 480px) {
  .navigation-arrows {
    display: flex;
  }
}
</style>
