<template>
  <div class="aerial-services">
    <img class="bg-helicopter-outline" src="https://api.builder.io/api/v1/image/assets/TEMP/e00c04be55eae7f3875875404c0599feb6505e25?width=2552" alt="" />
    <img class="bg-geometric-1" src="https://api.builder.io/api/v1/image/assets/TEMP/f9a98a4ddbc26168cbe2c70d23b013cb859d0d36?width=2192" alt="" />
    <img class="bg-geometric-2" src="https://api.builder.io/api/v1/image/assets/TEMP/5fadb1237fd28b1fec19da02ff507748eae7bdc7?width=556" alt="" />
    <img class="drone-image" src="https://api.builder.io/api/v1/image/assets/TEMP/d795a707aa2baa4cc9d514650cff6aef8ba125bd?width=2540" alt="" />

    <div class="services-container" :class="{ 'services-loaded': isServicesLoaded }" ref="servicesContainerRef">
      <div class="services-header">
        <SectionLabel>OUR SERVICES</SectionLabel>
        <h2 class="section-title">
          <span class="title-bold">Aerial Solutions Tailored to</span><br/>
          <span class="title-light">Your Mission</span>
        </h2>
      </div>

      <div class="services-grid">
        <div class="service-card card-delay-1">
          <div class="card-image-wrapper">
            <div class="card-overlay"></div>
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/fe5c2334f9f080ff8b5c212ba479fb0dc32bd14a?width=586" alt="Helicopter Rental" />
          </div>
          <div class="card-content">
            <div class="card-number">01.</div>
            <h3 class="card-title">Helicopter Rental & Charter</h3>
            <p class="card-description">Point-to-point charter flights for executives, VIP transfers and remote access. Flexible departure times, comfortable cabins and experienced commercial pilots.</p>
          </div>
        </div>

        <div class="service-card card-delay-2">
          <div class="card-image-wrapper">
            <div class="card-overlay"></div>
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/3d0450e5df59859f882b2e54090c5acda11b4678?width=586" alt="Aerial Filming" />
          </div>
          <div class="card-content">
            <div class="card-number">02.</div>
            <h3 class="card-title">Aerial Filming & Video Production</h3>
            <p class="card-description">Cinematic aerials for film, TV, advertising, real estate and events. Stabilized gimbals, cinema-grade cameras and a crew that understands production workflows.</p>
          </div>
        </div>

        <div class="service-card card-delay-3">
          <div class="card-image-wrapper">
            <div class="card-overlay"></div>
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/88acf5cc83779de54ba2028ec0f0f0a460e5bc1c?width=586" alt="Surveying" />
          </div>
          <div class="card-content">
            <div class="card-number">03.</div>
            <h3 class="card-title">Surveying & Inspection Flights</h3>
            <p class="card-description">High-accuracy aerial surveys for construction, infrastructure, utilities and agriculture. Capture large areas quickly and minimize the need for ground crews.</p>
          </div>
        </div>

        <div class="service-card card-delay-4">
          <div class="card-image-wrapper">
            <div class="card-overlay"></div>
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/e460f8318b5e3e98bd2835a4001e29e28d19b1f5?width=586" alt="3D Mapping" />
          </div>
          <div class="card-content">
            <div class="card-number">04.</div>
            <h3 class="card-title">3D Space Mapping & Modelling</h3>
            <p class="card-description">LiDAR and photogrammetry solutions to generate detailed 3D models, point clouds and orthomosaics for engineers, planners and asset managers.</p>
          </div>
        </div>
      </div>

      <div class="services-footer">
        <p class="footer-left">
          <span class="footer-text">Not sure which service you need? Tell us about your project and we'</span><span class="footer-highlight">ll recommend the best platform and approach.</span>
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

const servicesContainerRef = ref(null)
const isServicesLoaded = ref(false)

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
    const observer = new IntersectionObserver(() => {})
    observer.disconnect()
  }
})
</script>

<style scoped>
.aerial-services {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #181818;
  overflow: hidden;
  padding: 8rem 6% 6rem;
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
  top: 8%;
  left: -15%;
  width: 19%;
  height: auto;
  transform: rotate(43.076deg);
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
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes cardFloat {
  0%, 100% {
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

.service-card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 427px;
  background: #0D0D0D;
  overflow: hidden;
  animation: cardFloat 6s ease-in-out infinite;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  transform: scale(0.9);
}

.services-loaded .service-card {
  animation: cardLoadIn 1.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards, cardFloat 6s ease-in-out 1.8s infinite;
}

.services-loaded .card-delay-1 {
  animation-delay: 0s, 1.8s;
}

.services-loaded .card-delay-2 {
  animation-delay: 0.4s, 2.2s;
}

.services-loaded .card-delay-3 {
  animation-delay: 0.8s, 2.6s;
}

.services-loaded .card-delay-4 {
  animation-delay: 1.2s, 3s;
}

.card-delay-1 {
  animation-delay: 0s;
}

.card-delay-2 {
  animation-delay: 0.2s;
}

.card-delay-3 {
  animation-delay: 0.4s;
}

.card-delay-4 {
  animation-delay: 0.6s;
}

.service-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(220, 198, 45, 0.2);
}

.card-image-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0D0D0D;
  opacity: 0.24;
  mix-blend-mode: luminosity;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.4s ease;
}

.service-card:hover .card-overlay {
  opacity: 0.35;
}

.card-overlay::before {
  content: '';
  position: absolute;
  width: 80px;
  height: 80px;
  border: 2px solid #DCC62D;
  border-radius: 50%;
  box-shadow:
    inset 0 0 0 1px #DCC62D,
    0 0 20px rgba(220, 198, 45, 0.5);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 3;
}

.service-card:hover .card-overlay::before {
  opacity: 1;
  animation: target-pulse 2s ease-in-out infinite;
}

.card-overlay::after {
  content: '';
  position: absolute;
  width: 100px;
  height: 2px;
  background: linear-gradient(90deg, transparent 0%, #DCC62D 20%, #DCC62D 80%, transparent 100%);
  box-shadow:
    0 -15px 0 0 currentColor,
    0 15px 0 0 currentColor,
    0 0 0 2px #DCC62D,
    0 0 20px rgba(220, 198, 45, 0.4);
  opacity: 0;
  transition: opacity 0.4s ease;
  color: #DCC62D;
  z-index: 3;
}

.service-card:hover .card-overlay::after {
  opacity: 1;
  animation: crosshair-shimmer 2s ease-in-out infinite;
}

@keyframes target-pulse {
  0%, 100% {
    transform: scale(1);
    box-shadow:
      inset 0 0 0 1px #DCC62D,
      0 0 20px rgba(220, 198, 45, 0.5);
  }
  50% {
    transform: scale(1.15);
    box-shadow:
      inset 0 0 0 1px #DCC62D,
      0 0 30px rgba(220, 198, 45, 0.8);
  }
}

@keyframes crosshair-shimmer {
  0%, 100% {
    opacity: 0.8;
    filter: brightness(1);
  }
  50% {
    opacity: 1;
    filter: brightness(1.3);
  }
}

.card-image-wrapper img {
  width: 100%;
  height: 103%;
  object-fit: cover;
  object-position: center;
  position: relative;
  top: -6px;
  z-index: 1;
  filter: grayscale(100%);
  transition: filter 0.4s ease;
}

.service-card:hover .card-image-wrapper img {
  filter: grayscale(0%);
}

.card-content {
  position: relative;
  z-index: 3;
  padding: 88px 20px 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  filter: grayscale(100%) brightness(0.8);
  transition: filter 0.4s ease;
}

.service-card:hover .card-content {
  filter: grayscale(0%) brightness(1);
}

.card-number {
  color: #DCC62D;
  font-family: 'Oswald', sans-serif;
  font-size: 40px;
  font-weight: 500;
  line-height: 1.075;
  text-transform: uppercase;
  margin: 0;
}

.card-title {
  color: #DCC62D;
  font-family: 'Oswald', sans-serif;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.536;
  text-transform: uppercase;
  margin: 0;
  min-height: 86px;
}

.card-description {
  color: #FFF;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  margin: 0.5rem 0 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
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

  .services-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .service-card {
    height: 380px;
  }

  .card-content {
    padding: 60px 20px 0;
  }

  .card-number {
    font-size: 36px;
  }

  .card-title {
    font-size: 24px;
    min-height: auto;
  }

  .card-description {
    font-size: 15px;
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
    padding: 3rem 3% 2.5rem;
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

  .service-card {
    height: 420px;
  }

  .card-content {
    padding: 50px 16px 0;
  }

  .card-number {
    font-size: 32px;
  }

  .card-title {
    font-size: 22px;
    line-height: 1.4;
  }

  .card-description {
    font-size: 14px;
    line-height: 1.5;
  }

  .footer-left,
  .footer-right {
    font-size: 15px;
  }
}
</style>
