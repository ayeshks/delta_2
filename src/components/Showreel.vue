<template>
  <div class="showreel" ref="showreelElement">
    <img class="drone-image" :class="{ 'drone-visible': isDroneVisible }"
      src="https://cdn.builder.io/api/v1/image/assets%2F76536513f46d49f58638b73b18830729%2Fac31c357624f485586f2ff4fa5f487b1?format=webp&width=800"
      alt="Drone" />

    <div class="bg-aerial-image">
      <img class="bg-aerial-img" :class="{ 'cinematic-loaded': isDroneVisible }"
        src="https://api.builder.io/api/v1/image/assets/TEMP/3c12ed418dea13ea3e7db4992dc1d1f372d72eed?width=4236"
        alt="" />
    </div>

    <div class="bg-overlay"></div>

    <div class="top-right-triangle"></div>

    <!-- <div class="top-right-geo">
      <img src="@/assets/showreel/bg-geometric-4.png.png" alt="" />
    </div> -->

    <div class="bottom-left-triangle"></div>

    <img class="geometric-pattern"
      src="https://cdn.builder.io/api/v1/image/assets%2F76536513f46d49f58638b73b18830729%2F43d249f813bc411690f1ff7183b193a0?format=webp&width=800"
      alt="" />

    <div class="showreel-container">
      <div class="video-section">
        <div class="video-thumbnail-stack">
          <div class="thumbnail-layer thumbnail-back">
            <div class="thumbnail-overlay"></div>
            <img
              :src="thumbnailSwapped ? 'https://api.builder.io/api/v1/image/assets/TEMP/c13888be4d1072e4ff2d29aa9dd6ed918ca2f586?width=1032' : 'https://api.builder.io/api/v1/image/assets/TEMP/7830954cf744e460cce8631c9f3e7b6bab9ae04c?width=1056'"
              :alt="thumbnailSwapped ? 'Helicopter and drone operations' : 'Aerial footage'" />
          </div>

          <div class="thumbnail-layer thumbnail-front">
            <div class="thumbnail-overlay"></div>
            <img
              :src="thumbnailSwapped ? 'https://api.builder.io/api/v1/image/assets/TEMP/7830954cf744e460cce8631c9f3e7b6bab9ae04c?width=1056' : 'https://api.builder.io/api/v1/image/assets/TEMP/c13888be4d1072e4ff2d29aa9dd6ed918ca2f586?width=1032'"
              :alt="thumbnailSwapped ? 'Aerial footage' : 'Helicopter and drone operations'" />

            <div class="play-button">
              <svg viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M62.2423 110.438C35.6138 110.438 13.938 88.7739 13.938 62.1454C13.938 35.5169 35.6017 13.8411 62.2423 13.8411C88.8708 13.8411 110.534 35.5047 110.534 62.1454C110.534 88.7739 88.8708 110.438 62.2423 110.438ZM62.2423 25.4903C42.0317 25.4903 25.5872 41.9348 25.5872 62.1454C25.5872 82.3559 42.0317 98.8004 62.2423 98.8004C82.4528 98.8004 98.8974 82.3559 98.8974 62.1454C98.8974 41.9348 82.4528 25.4903 62.2423 25.4903Z"
                  fill="#DCC62D" />
                <path
                  d="M52.9301 41.8862L83.1915 59.3601C85.3348 60.5952 85.3348 63.6831 83.1915 64.9182L52.9301 82.4042C50.7868 83.6393 48.1106 82.0893 48.1106 79.619V44.6714C48.1106 42.2011 50.7868 40.6511 52.9301 41.8862Z"
                  fill="black" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div class="content-section">
        <SectionLabel>SHOWREEL</SectionLabel>

        <h2 class="section-title">
          <span class="title-bold">See Our Aircraft and </span><span class="title-light">Crews in Action</span>
        </h2>

        <p class="section-description">
          Watch a short reel featuring helicopter and drone projects across film, infrastructure, real estate and
          environmental work. Every clip was planned, flown and delivered by our in-house team.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SectionLabel from './SectionLabel.vue'

const showreelElement = ref(null)
const isDroneVisible = ref(false)
const thumbnailSwapped = ref(false)
let lastScrollY = 0
let scrollThreshold = 200

const handleScroll = () => {
  const currentScrollY = window.scrollY
  const scrollDelta = Math.abs(currentScrollY - lastScrollY)

  if (scrollDelta >= scrollThreshold) {
    thumbnailSwapped.value = !thumbnailSwapped.value
    lastScrollY = currentScrollY
  }
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isDroneVisible.value) {
        isDroneVisible.value = true
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.2
  })

  if (showreelElement.value) {
    observer.observe(showreelElement.value)
  }

  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.showreel {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background: #181818;
  overflow: hidden;
  padding: 0;
  margin: 0;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  z-index: 10;
  display: flex;
  align-items: center;
}

.drone-image {
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%) translateY(600px);
  width: auto;
  height: 300px;
  object-fit: contain;
  z-index: 2;
  opacity: 0;
  transition: all 2.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.drone-image.drone-visible {
  transform: translateX(-50%) translateY(0);
  opacity: 1;
}

.geometric-pattern {
  position: absolute;
  bottom: -180px;
  left: -130px;
  width: 580px;
  height: auto;
  object-fit: contain;
  z-index: 2;
  opacity: 0.8;
  pointer-events: none;
  /* transform: rotate(-10deg); */
}

.top-right-geo {
  position: absolute;
  top: -120px;
  right: -30px;
  width: 990px;
  height: 990px;
  z-index: 2;
  pointer-events: none;
}

.top-right-geo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.bg-aerial-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.bg-aerial-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bg-aerial-img {
  transform: scale(1.3);
  opacity: 0;
  transition: all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.bg-aerial-img.cinematic-loaded {
  transform: scale(1);
  opacity: 1;
}

.bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 2;
}

.top-right-triangle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;
  background: rgb(24, 24, 24);
  z-index: 2;
  pointer-events: none;
  clip-path: polygon(0 0, 100% 0, 100% 180px, 0 0);
}

.bottom-left-triangle {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 400px;
  background: rgb(24, 24, 24);
  z-index: 2;
  pointer-events: none;
  clip-path: polygon(0 100%, 100% 100%, 0 calc(100% - 100px));
}

.showreel-container {
  position: relative;
  z-index: 3;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  padding: 8rem 6%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6rem;
}

.video-section {
  flex: 0 0 auto;
  width: 100%;
  max-width: 506px;
}

.video-thumbnail-stack {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 57.1%;
}

.thumbnail-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.thumbnail-back {
  top: -10.7%;
  left: -11.3%;
  z-index: 1;
  filter: drop-shadow(0 8px 4px rgba(0, 0, 0, 0.54));
}

.thumbnail-front {
  top: 9%;
  left: 11.3%;
  z-index: 2;
  filter: drop-shadow(0 11px 6.8px rgba(0, 0, 0, 0.24));
}

.thumbnail-layer img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}


.thumbnail-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.3;
  z-index: 1;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 124px;
  height: 124px;
  z-index: 2;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.play-button:hover {
  transform: translate(-50%, -50%) scale(1.1);
}

.play-button svg {
  width: 100%;
  height: 100%;
}

.content-section {
  flex: 1;
  max-width: 556px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.section-title {
  color: #FFF;
  font-family: 'Oswald', sans-serif;
  font-size: 50px;
  font-weight: 500;
  line-height: 1.42;
  text-transform: uppercase;
  margin: 0;
}

.title-bold {
  font-weight: 500;
}

.title-light {
  font-weight: 200;
}

.section-description {
  color: #FFF;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.625;
  margin: 0;
}

@media (max-width: 1200px) {
  .drone-image {
    height: 250px;
  }

  .top-right-triangle {
    height: 350px;
    clip-path: polygon(0 0, 100% 0, 100% 350px, 0 0);
  }

  .top-right-geo {
    width: 320px;
    height: 320px;
    right: -40px;
    top: -30px;
  }

  .bottom-left-triangle {
    height: 350px;
    clip-path: polygon(0 100%, 100% 100%, 0 calc(100% - 350px));
  }

  .geometric-pattern {
    width: 350px;
  }

  .showreel-container {
    padding: 6rem 5%;
    gap: 4rem;
  }

  .section-title {
    font-size: 42px;
  }

  .video-section {
    max-width: 450px;
  }
}

@media (max-width: 1024px) {
  .top-right-triangle {
    height: 300px;
    clip-path: polygon(0 0, 100% 0, 100% 300px, 0 0);
  }

  .top-right-geo {
    width: 280px;
    height: 280px;
    right: -30px;
    top: -20px;
  }

  .bottom-left-triangle {
    height: 300px;
    clip-path: polygon(0 100%, 100% 100%, 0 calc(100% - 300px));
  }

  .showreel-container {
    padding: 5rem 4%;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
  }

  .video-section {
    max-width: 100%;
    width: 100%;
  }

  .content-section {
    max-width: 100%;
    text-align: center;
  }

  .section-title {
    font-size: 38px;
  }
}

@media (max-width: 768px) {
  .drone-image {
    height: 200px;
    top: 3%;
  }

  .top-right-triangle {
    height: 250px;
    clip-path: polygon(0 0, 100% 0, 100% 250px, 0 0);
  }

  .top-right-geo {
    width: 220px;
    height: 220px;
    right: -20px;
    top: -15px;
  }

  .bottom-left-triangle {
    height: 250px;
    clip-path: polygon(0 100%, 100% 100%, 0 calc(100% - 250px));
  }

  .geometric-pattern {
    width: 280px;
  }

  .showreel-container {
    padding: 4rem 4% 3rem;
    gap: 2.5rem;
  }

  .section-title {
    font-size: 32px;
    line-height: 1.3;
  }

  .section-label {
    font-size: 18px;
  }

  .section-description {
    font-size: 15px;
  }

  .video-section {
    max-width: 480px;
  }

  .play-button {
    width: 100px;
    height: 100px;
  }
}

@media (max-width: 480px) {

  .showreel {
  min-height: 90vh;
}

  .showreel-container {
    top : 70px;
    min-height: 70vh;
  }

  .drone-image {
    height: 150px;
    top: 5%;
  }

  .top-right-triangle {
    height: 200px;
    clip-path: polygon(0 0, 100% 0, 100% 60px, 0 0);
  }

  .top-right-geo {
    width: 180px;
    height: 180px;
    right: -15px;
    top: -10px;
  }

  .bottom-left-triangle {
    height: 200px;
    bottom: -2px;
    clip-path: polygon(0 100%, 100% 100%, 0 calc(100% - 70px));
  }

  .geometric-pattern {
    width: 240px;
    bottom: -100px;
  }

  .showreel-container {
    padding: 3rem 3% 2.5rem;
  }

  .section-title {
    font-size: 26px;
  }

  .section-label {
    font-size: 16px;
  }

  .section-description {
    font-size: 14px;
    line-height: 1.5;
  }

  .video-section {
    max-width: 100%;
  }

  .play-button {
    width: 80px;
    height: 80px;
  }

  .bg-overlay {
    background: rgba(0, 0, 0, 0.5);
  }
}
</style>
