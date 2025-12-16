<template>
  <div class="drone-services" ref="sectionRef">
    <div class="parallelogram-background"></div>

    <div class="background-images">
      <!-- SVG defs for water-like wave effect (unique IDs for this section) -->
      <svg class="visually-hidden" width="0" height="0" aria-hidden="true" focusable="false">
        <filter id="waterWaveFilter_ds">
          <feTurbulence id="waveTurb_ds" type="fractalNoise" baseFrequency="0.006 0.015" numOctaves="2" seed="11" />
          <feDisplacementMap id="waveDisp_ds" in="SourceGraphic" scale="14" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <img class="bg-landscape"
        src="https://api.builder.io/api/v1/image/assets/TEMP/823fc9d7831a3985286fe9c81e14cc807581a771?width=8204"
        alt="" />
    </div>

    <div class="drone-image drone-scroll-reveal" ref="droneImageRef">
      <img src="@/assets/drone-services/2_drone.png"
        alt="Professional Drone" />
    </div>

    <!-- Mobile-only decorative drone image  -->
    <div class="mobile-drone" aria-hidden="true">
      <img src="@/assets/mobile-view/drone.png" alt="" />
    </div>

    <div class="content-container" ref="contentRef">
      <div :class="['content', { 'content-loaded': isContentLoaded }]">
        <SectionLabel>DRONE OPERATIONS</SectionLabel>

        <h2 class="section-title">
          <span class="title-bold">Precision Drone Services</span><br />
          for <span class="title-light">Every Project</span>
        </h2>

        <p class="section-description">
          Our UAV fleet is equipped with high-resolution cameras, LiDAR and thermal sensors to capture the data and
          visuals you need. Whether you are producing a TV commercial, inspecting assets or mapping complex terrain, we
          plan, fly and deliver end-to-end.
        </p>

        <div class="button-group desktop-buttons">
          <PrimaryButton>Explore Drone Packages</PrimaryButton>
          <SecondaryButton>I'm Interested</SecondaryButton>
        </div>
        <div class="button-group mobile-buttons">
          <PrimaryButton>BOOK NOW</PrimaryButton>
          <SecondaryButton>I'm Interested</SecondaryButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import PrimaryButton from './buttons/PrimaryButton.vue'
import SecondaryButton from './buttons/SecondaryButton.vue'
import SectionLabel from './SectionLabel.vue'

const droneImageRef = ref(null)
const contentRef = ref(null)
const isContentLoaded = ref(false)
const sectionRef = ref(null)

const handleScroll = () => {
  if (!droneImageRef.value) return
  const scrollOffset = window.scrollY * 0.5
  droneImageRef.value.style.transform = `translateY(calc(-50% + ${scrollOffset}px))`
}

const observeDroneImage = () => {
  if (!droneImageRef.value) return

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('drone-visible')
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.1
  })

  observer.observe(droneImageRef.value)
}

const observeContent = () => {
  if (!contentRef.value) return

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          isContentLoaded.value = true
        }, 100)
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.1
  })

  observer.observe(contentRef.value)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  observeDroneImage()
  observeContent()
  // start wave animation
  startWaveAnimation()
  window.addEventListener('mousemove', onMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (rafId) cancelAnimationFrame(rafId)
  window.removeEventListener('mousemove', onMouseMove)
})

// Wave effect animation & interaction (slow, subtle)
let rafId = 0
const startWaveAnimation = () => {
  const turb = document.getElementById('waveTurb_ds')
  if (!turb) return
  let t = 0
  const loop = () => {
    t += 0.006
    const xFreq = 0.005 + 0.0035 * Math.sin(t * 0.35)
    const yFreq = 0.012 + 0.0045 * Math.cos(t * 0.28)
    turb.setAttribute('baseFrequency', `${xFreq.toFixed(4)} ${yFreq.toFixed(4)}`)
    rafId = requestAnimationFrame(loop)
  }
  loop()
}

const onMouseMove = (e) => {
  const disp = document.getElementById('waveDisp_ds')
  if (!disp || !sectionRef.value) return
  const rect = sectionRef.value.getBoundingClientRect()
  if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) return
  const relY = (e.clientY - rect.top) / rect.height
  const scale = 6 + Math.min(1, Math.max(0, relY)) * 16
  disp.setAttribute('scale', String(scale.toFixed(1)))
}
</script>

<style scoped>
.drone-services {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #1F1F1F;
  overflow: hidden;
  padding: 8rem 6% 6rem;
  z-index: 10;
}

.parallelogram-background {
  display: none;
}

.background-images {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  pointer-events: none;
  overflow: hidden;
}

.bg-landscape {
  position: absolute;
  bottom: -40%;
  left: -30%;
  width: 130%;
  height: auto;
  /* opacity: 0.4; */
  filter: url(#waterWaveFilter_ds);
}

.visually-hidden {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
}

.drone-image {
  position: absolute;
  left: -450px;
  top: 50%;
  width: 76%;
  /* max-width: 595px; */
  z-index: 6;
  pointer-events: none;
  will-change: transform;
}

.mobile-drone {
  display: none;
  position: absolute;
  right: 1%;
  /* left: 55%; */
  top: -20%;
  z-index: 5;
}

.mobile-drone img {
  width: 70vw;
  max-width: 260px;
  height: auto;
  opacity: 0.9;
}

.drone-scroll-reveal {
  opacity: 0;
  transform: translateY(100px);
}

.drone-scroll-reveal.drone-visible {
  animation: droneSlideIn 2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes droneSlideIn {
  0% {
    opacity: 0;
    transform: translateY(calc(-50% + 100px));
  }

  50% {
    opacity: 0.7;
  }

  100% {
    opacity: 1;
    transform: translateY(-50%);
  }
}

@keyframes slideInRight {
  0% {
    opacity: 0;
    transform: translateX(60px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.drone-image img {
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 595/806;
  object-fit: contain;
}


.content-container {
  position: relative;
  z-index: 7;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-height: 60vh;
  max-width: 1440px;
  margin: 0 auto;
  right:100px
}

.content {
  max-width: 610px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.content:not(.content-loaded) {
  opacity: 0;
  transform: translateX(60px);
}

.content.content-loaded {
  animation: slideInRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.section-title {
  color: #FFF;
  font-family: 'Oswald', sans-serif;
  font-size: 50px;
  font-weight: 500;
  line-height: 1.42;
  text-transform: uppercase;
  margin: 0;
  text-shadow: 0 6px 4.4px rgba(0, 0, 0, 0.24);
}

.title-bold {
  font-weight: 500;
}

.title-light {
  font-weight: 250;
}

.section-description {
  color: #FFF;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.625;
  margin: 0.5rem 0 1rem;
}

.button-group {
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}

.desktop-buttons {
  display: flex;
}

.mobile-buttons {
  display: none;
}

@media (max-width: 1200px) {
  .drone-services {
    padding: 6rem 5% 5rem;
  }

  .drone-image {
    width: 45%;
    max-width: 500px;
  }

  .content {
    max-width: 520px;
  }

  .section-title {
    font-size: 42px;
  }
}

@media (max-width: 1024px) {
  .drone-services {
    padding: 5rem 4%;
  }

  .drone-image {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    max-width: 450px;
    margin: 0 auto 3rem;
    opacity: 0.7;
  }

  .content-container {
    justify-content: center;
    top: 40px;
  }

  .content {
    max-width: 100%;
  }

  .section-title {
    font-size: 38px;
  }
}

@media (max-width: 768px) {
  .drone-services {
    padding: 4rem 4% 3rem;
  }

  /* Hide desktop drone, show mobile corner image */
  .drone-image {
    display: none;
  }

  .mobile-drone {
    display: block;
  }

  /* Left-align content and buttons on mobile */
  .content-container {
    justify-content: flex-start;
  }

  .content {
    align-items: flex-start;
    text-align: left;
  }

  .section-title {
    font-size: 32px;
    line-height: 1.3;
  }

  .section-description {
    font-size: 15px;
  }

  .button-group {
    flex-direction: column;
    gap: 1rem;
  }

  .desktop-buttons {
    display: none;
  }

  .mobile-buttons {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  /* Narrow fixed widths for mobile CTAs, aligned to left edge */
  .mobile-buttons .btn-primary,
  .mobile-buttons .btn-secondary {
    width: 200px;
    max-width: none;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    max-width: 340px;
    height: 56px;
  }

  .drone-image {
    max-width: 380px;
  }
}

@media (max-width: 480px) {
  .content-container {
    justify-content: flex-start;
    padding: 30px;
    margin-top: 30px;
    left: 10px;
  }

  .drone-services {
    padding: 3rem 3% 2.5rem;
    min-height: 75vh;
  }

  .section-title {
    font-size: 26px;
  }

  .section-description {
    font-size: 14px;
    line-height: 1.5;
  }

  .btn-primary,
  .btn-secondary {
    height: 50px;
    font-size: 16px;
  }

  .drone-image {
    max-width: 300px;
  }

  .bg-landscape {
    bottom: -8%;
    left: -15%;
    width: 150%;
    height: 100%;
    object-fit: cover;
    object-position: center bottom;
  }
}
</style>
