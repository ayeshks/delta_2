<template>
  <div class="aerial-services">
    <img class="bg-helicopter-outline"
      src="https://api.builder.io/api/v1/image/assets/TEMP/e00c04be55eae7f3875875404c0599feb6505e25?width=2552"
      alt="" />
    <!-- <img class="bg-geometric-1"
      src="https://api.builder.io/api/v1/image/assets/TEMP/f9a98a4ddbc26168cbe2c70d23b013cb859d0d36?width=2192"
      alt="" /> -->
    <!-- <img class="bg-geometric-2"
      src="https://api.builder.io/api/v1/image/assets/TEMP/5fadb1237fd28b1fec19da02ff507748eae7bdc7?width=556" alt="" /> -->
    
    <img class="drone-image"
      src="https://api.builder.io/api/v1/image/assets/TEMP/d795a707aa2baa4cc9d514650cff6aef8ba125bd?width=2540"
      alt="" />
    <div class="top-left-triangle"></div>

    <div class="left-top-geo">
      <img src="@/assets/aerial-services/bg-geometric-3.png" alt="" />
    </div>

    <div class="services-container" :class="{ 'services-loaded': isServicesLoaded }" ref="servicesContainerRef">
      <div class="services-header">
        <SectionLabel>OUR SERVICES</SectionLabel>
        <h2 class="section-title">
          <span class="title-bold">Aerial Solutions Tailored to</span><br />
          <span class="title-light">Your Mission</span>
        </h2>
      </div>

      <!-- Desktop/Tablet grid -->
      <div class="services-grid">
        <ServiceCard class="card-delay-1" number="01." title="Helicopter Rental & Charter"
          description="Point-to-point charter flights for executives, VIP transfers and remote access. Flexible departure times, comfortable cabins and experienced commercial pilots."
          imageUrl="https://api.builder.io/api/v1/image/assets/TEMP/fe5c2334f9f080ff8b5c212ba479fb0dc32bd14a?width=586" />

        <ServiceCard class="card-delay-2" number="02." title="Aerial Filming & Video Production"
          description="Cinematic aerials for film, TV, advertising, real estate and events. Stabilized gimbals, cinema-grade cameras and a crew that understands production workflows."
          imageUrl="https://api.builder.io/api/v1/image/assets/TEMP/3d0450e5df59859f882b2e54090c5acda11b4678?width=586" />

        <ServiceCard class="card-delay-3" number="03." title="Surveying & Inspection Flights"
          description="High-accuracy aerial surveys for construction, infrastructure, utilities and agriculture. Capture large areas quickly and minimize the need for ground crews."
          imageUrl="https://api.builder.io/api/v1/image/assets/TEMP/88acf5cc83779de54ba2028ec0f0f0a460e5bc1c?width=586" />

        <ServiceCard class="card-delay-4" number="04." title="3D Space Mapping & Modelling"
          description="LiDAR and photogrammetry solutions to generate detailed 3D models, point clouds and orthomosaics for engineers, planners and asset managers."
          imageUrl="https://api.builder.io/api/v1/image/assets/TEMP/e460f8318b5e3e98bd2835a4001e29e28d19b1f5?width=586" />
      </div>

      <!-- Mobile-only slider: one card visible with navigation -->
      <div class="services-slider" v-if="cards.length">
        <div class="slider-card">
          <ServiceCard :number="cards[currentIndex].number" :title="cards[currentIndex].title"
            :description="cards[currentIndex].desc" :imageUrl="cards[currentIndex].img" :enableTilt="false" />
        </div>
        <div class="slider-controls">
          <button class="slider-btn" @click="prevCard" aria-label="Previous">‹</button>
          <div class="slider-dots">
            <button v-for="(c, i) in cards" :key="i" class="dot" :class="{ active: i === currentIndex }"
              @click="goTo(i)" :aria-label="`Go to slide ${i + 1}`"></button>
          </div>
          <button class="slider-btn" @click="nextCard" aria-label="Next">›</button>
        </div>
      </div>

      <div class="services-footer">
        <p class="footer-left">
          <span class="footer-text">Not sure which service you need? Tell us about your project and we'</span><span
            class="footer-highlight">ll recommend the best platform and approach.</span>
        </p>
        <p class="footer-right">
          We combine crewed helicopters and advanced drones to deliver the right platform for each job.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SectionLabel from './SectionLabel.vue'
import ServiceCard from './ServiceCard.vue'

const servicesContainerRef = ref(null)
const isServicesLoaded = ref(false)

// Mobile slider state
const currentIndex = ref(0)
const cards = ref([
  {
    number: '01.',
    title: 'Helicopter Rental & Charter',
    img: 'https://api.builder.io/api/v1/image/assets/TEMP/fe5c2334f9f080ff8b5c212ba479fb0dc32bd14a?width=586',
    desc: 'Point-to-point charter flights for executives, VIP transfers and remote access. Flexible departure times, comfortable cabins and experienced commercial pilots.'
  },
  {
    number: '02.',
    title: 'Aerial Filming & Video Production',
    img: 'https://api.builder.io/api/v1/image/assets/TEMP/3d0450e5df59859f882b2e54090c5acda11b4678?width=586',
    desc: 'Cinematic aerials for film, TV, advertising, real estate and events. Stabilized gimbals, cinema-grade cameras and a crew that understands production workflows.'
  },
  {
    number: '03.',
    title: 'Surveying & Inspection Flights',
    img: 'https://api.builder.io/api/v1/image/assets/TEMP/88acf5cc83779de54ba2028ec0f0f0a460e5bc1c?width=586',
    desc: 'High-accuracy aerial surveys for construction, infrastructure, utilities and agriculture. Capture large areas quickly and minimize the need for ground crews.'
  },
  {
    number: '04.',
    title: '3D Space Mapping & Modelling',
    img: 'https://api.builder.io/api/v1/image/assets/TEMP/e460f8318b5e3e98bd2835a4001e29e28d19b1f5?width=586',
    desc: 'LiDAR and photogrammetry solutions to generate detailed 3D models, point clouds and orthomosaics for engineers, planners and asset managers.'
  }

])

const prevCard = () => { currentIndex.value = (currentIndex.value + cards.value.length - 1) % cards.value.length }
const nextCard = () => { currentIndex.value = (currentIndex.value + 1) % cards.value.length }
const goTo = (i) => { currentIndex.value = i }

const observeServices = () => {
  if (!servicesContainerRef.value) return

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          isServicesLoaded.value = true
        }, 100)
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.1
  })

  observer.observe(servicesContainerRef.value)
}

onMounted(() => {
  observeServices()
})

onUnmounted(() => {
  if (servicesContainerRef.value) {
    const observer = new IntersectionObserver(() => { })
    observer.disconnect()
  }
})
</script>

<style scoped>


.left-top-geo {
  position: absolute;
  top: 160px;
  left: -110px;
  width: 450px;
  height: 450px;
  z-index: 1;
  pointer-events: none;
}

.left-top-geo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.aerial-services {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #181818;
  overflow: hidden;
  padding: 15rem 10% 6rem;
  z-index: 10;
}

.bg-helicopter-outline {
  position: absolute;
  top: -2%;
  right: -15%;
  width: 88%;
  height: auto;
  opacity: 1;
  mix-blend-mode: lighten;
  filter: blur(2.65px);
  pointer-events: none;
  z-index: 1;
}

.bg-geometric-1 {
  position: absolute;
  bottom: -15%;
  left: -10%;
  width: 76%;
  height: auto;
  transform: rotate(-75deg);
  opacity: 0.7;
  pointer-events: none;
  z-index: 1;
}

.bg-geometric-2 {
  position: absolute;
  top: 50%;
  left: -10%;
  width: 19%;
  height: auto;
  transform: rotate(-50.076deg);
  opacity: 0.6;
  pointer-events: none;
  z-index: 1;
}

.drone-image {
  position: absolute;
  top: -3%;
  right: -8%;
  width: 65%;
  height: auto;
  mix-blend-mode: luminosity;
  opacity: 0.8;
  pointer-events: none;
  z-index: 2;
  transition: transform 0.4s ease;
}

.aerial-services:hover .drone-image {
  animation: drone-float 3s ease-in-out infinite;
}

@keyframes drone-float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-15px);
  }
}

.top-left-triangle {
  position: absolute;
  top: -2px;
  left: 0;
  width: 100%;
  height: 400px;
  background: rgb(31, 31, 31);
  z-index: 2;
  pointer-events: none;
  clip-path: polygon(0 0, 100% 0, 0 200px);
}

@keyframes cardFloat {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-6px);
  }
}

@keyframes cardLoadIn {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}


.services-container {
  position: relative;
  z-index: 3;
  max-width: 1440px;
  margin: 0 auto;
}

.services-header {
  margin-bottom: 3.5rem;
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

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.67rem;
  margin-bottom: 4rem;
}

/* Mobile slider (hidden on md/lg) */
.services-slider {
  display: none;
}

.slider-card {
  position: relative;
}

.slider-controls {
  margin-top: 12px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.slider-btn {
  background: transparent;
  border: 1px solid #DCC62D;
  color: #DCC62D;
  width: 36px;
  height: 36px;
  border-radius: 4px;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
}

.slider-dots {
  display: flex;
  gap: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #555;
  border: none;
  cursor: pointer;
}

.dot.active {
  background: #DCC62D;
}

.card-delay-1 {
  animation: cardLoadIn 1.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0s forwards, cardFloat 6s ease-in-out 1.8s infinite;
  opacity: 0;
  transform: scale(0.9);
}

.card-delay-2 {
  animation: cardLoadIn 1.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s forwards, cardFloat 6s ease-in-out 2.2s infinite;
  opacity: 0;
  transform: scale(0.9);
}

.card-delay-3 {
  animation: cardLoadIn 1.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s forwards, cardFloat 6s ease-in-out 2.6s infinite;
  opacity: 0;
  transform: scale(0.9);
}

.card-delay-4 {
  animation: cardLoadIn 1.8s cubic-bezier(0.34, 1.56, 0.64, 1) 1.2s forwards, cardFloat 6s ease-in-out 3s infinite;
  opacity: 0;
  transform: scale(0.9);
}


.services-footer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;
  align-items: flex-start;
}

.footer-left,
.footer-right {
  margin: 0;
  font-family: 'Manrope', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.45;
}

.footer-left {
  color: #FFF;
}

.footer-text {
  color: #FFF;
  font-weight: 500;
}

.footer-highlight {
  color: #DCC62D;
  font-weight: 700;
}

.footer-right {
  color: #FFF;
  font-size: 16px;
  line-height: 1.625;
}

@media (max-width: 1200px) {
  .aerial-services {
    padding: 6rem 5% 5rem;
  }

  .left-top-geo {
    width: 260px;
    left: -50px;
    top: -30px;
  }

  .top-left-triangle {
    height: 350px;
    clip-path: polygon(0 0, 100% 0, 0 350px);
  }

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .section-title {
    font-size: 42px;
  }

  .bg-helicopter-outline,
  .drone-image {
    opacity: 0.6;
  }
}

@media (max-width: 1024px) {
  .aerial-services {
    padding: 5rem 4%;
  }

  .left-top-geo {
    width: 220px;
    left: -40px;
    top: -20px;
  }

  .top-left-triangle {
    height: 300px;
    clip-path: polygon(0 0, 100% 0, 0 300px);
  }

  .section-title {
    font-size: 38px;
  }

  .services-footer {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-left,
  .footer-right {
    font-size: 18px;
  }
}

@media (max-width: 768px) {
  .aerial-services {
    padding: 4rem 4% 3rem;
  }

  .left-top-geo {
    width: 180px;
    left: -30px;
    top: -15px;
  }

  .top-left-triangle {
    height: 250px;
    clip-path: polygon(0 0, 100% 0, 0 250px);
  }

  /* Hide desktop grid, show slider */
  .services-grid {
    display: none;
  }

  .services-slider {
    display: block;
  }

  .section-title {
    font-size: 32px;
    line-height: 1.3;
  }

  .section-label {
    font-size: 18px;
  }

  .footer-left,
  .footer-right {
    font-size: 16px;
  }

  .bg-geometric-1,
  .bg-geometric-2 {
    opacity: 0.4;
  }
}

@media (max-width: 480px) {
  .aerial-services {
    padding: 3rem 8% 2.5rem;
  }

  .left-top-geo {
    width: 150px;
    left: -25px;
    top: -10px;
  }

  .top-left-triangle {
    height: 200px;
    clip-path: polygon(0 0, 100% 0, 0 200px);
  }

  .services-header {
    margin-bottom: 2.5rem;
  }

  .section-title {
    font-size: 26px;
  }

  .section-label {
    font-size: 16px;
  }

  .footer-left,
  .footer-right {
    font-size: 15px;
  }
}
</style>
