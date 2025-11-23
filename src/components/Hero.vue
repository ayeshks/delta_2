<template>
  <div class="hero-wrapper" ref="heroRef">
    <div class="hero-background">
      <!-- SVG filter defs for interactive water-like wave -->
      <svg class="visually-hidden" width="0" height="0" aria-hidden="true" focusable="false">
        <filter id="waterWaveFilter">
          <feTurbulence id="waveTurb" type="fractalNoise" baseFrequency="0.008 0.02" numOctaves="2" seed="7" />
          <feDisplacementMap id="waveDisp" in="SourceGraphic" scale="18" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <div id="tsparticles" class="particles-container"></div>
      <img class="bg-helicopter-overlay water-wave"
        src="https://cdn.builder.io/api/v1/image/assets%2Ff290de50bb23438081b567faae887dbc%2F729cf7c6f1134dd6bbed2a98a7ab5f73?format=webp&width=800"
        alt="Helicopter" />

      <img class="bg-helicopter helicopter-landing"
        src="@/assets/hero/helicopter.png"
        alt="Helicopter" />
      <div class="blur-background-overlay"></div>
      <img class="bg-image-overlay-1"
        src="https://api.builder.io/api/v1/image/assets/TEMP/d924db34fa0bd87939ee320874555174aade0a21?width=648"
        alt="" />
      <img class="bg-image-overlay-2"
        src="https://api.builder.io/api/v1/image/assets/TEMP/00da309db929fb12a1cff1a8644132770534426b?width=412"
        alt="" />
      <div class="bottom-right-triangle"></div>
    </div>

    <div class="hero-section">
      <div class="hero-left">
        <div class="title-box">
          <span class="bracket bracket-animate">[</span>
          <h1 class="hero-title title-animate">PREMIUM AERIAL<br />SERVICES</h1>
          <span class="bracket bracket-animate">]</span>
        </div>

        <h2 class="hero-subtitle subtitle-animate">
          Helicopter & Drone Hire for Film, Surveying & 3D Mapping
        </h2>

        <p class="hero-description description-animate">
          Delta helicopters provides professional helicopter and drone operations for production companies, engineers,
          surveyors and agencies. From cinematic aerial shots to precision 3D mapping, our licensed pilots deliver safe,
          reliable and efficient missions.
        </p>

        <PrimaryButton>Book Now</PrimaryButton>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import PrimaryButton from './buttons/PrimaryButton.vue'

const heroRef = ref(null)

onMounted(async () => {
  const { tsParticles } = await import('https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.1.0/+esm')
  const { loadAll } = await import('https://cdn.jsdelivr.net/npm/@tsparticles/all@3.1.0/+esm')

  await loadAll(tsParticles)

  await tsParticles.load({
    id: 'tsparticles',
    options: {
      particles: {
        number: {
          value: 200
        },
        color: {
          value: '#FFFFFF'
        },
        links: {
          enable: true,
          distance: 150,
          color: '#FFFFFF',
          opacity: 0.4,
          width: 1
        },
        shape: {
          type: 'circle'
        },
        opacity: {
          value: 0.5
        },
        size: {
          value: {
            min: 2,
            max: 4
          }
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: false,
          straight: false,
          outModes: {
            default: 'out'
          }
        }
      },
      background: {
        color: 'transparent'
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'repulse'
          }
        },
        modes: {
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      }
    }
  })
})

// Interactive water-wave filter animation and mouse response
let rafId = 0
const animateWaves = () => {
  const turb = document.getElementById('waveTurb')
  if (!turb) return
  let t = 0
  const loop = () => {
    t += 0.006
    const xFreq = 0.006 + 0.004 * Math.sin(t * 0.45)
    const yFreq = 0.015 + 0.006 * Math.cos(t * 0.35)
    turb.setAttribute('baseFrequency', `${xFreq.toFixed(4)} ${yFreq.toFixed(4)}`)
    rafId = requestAnimationFrame(loop)
  }
  loop()
}

const onMouseMove = (e) => {
  const disp = document.getElementById('waveDisp')
  if (!disp || !heroRef.value) return
  const rect = heroRef.value.getBoundingClientRect()
  const relY = (e.clientY - rect.top) / rect.height
  const relX = (e.clientX - rect.left) / rect.width
  const scale = 5 + Math.min(1, Math.max(0, relY)) * 20
  disp.setAttribute('scale', String(scale.toFixed(1)))
  const turb = document.getElementById('waveTurb')
  if (turb) {
    const xFreq = 0.006 + 0.01 * (relX - 0.5)
    const yFreq = 0.015 + 0.01 * (relY - 0.5)
    turb.setAttribute('baseFrequency', `${xFreq.toFixed(4)} ${yFreq.toFixed(4)}`)
  }
}

onMounted(() => {
  animateWaves()
  window.addEventListener('mousemove', onMouseMove)
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
  window.removeEventListener('mousemove', onMouseMove)
})
</script>

<style scoped>
.hero-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  background: #181818;
  z-index: auto;
  isolation: isolate;
  contain: layout;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.blur-background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  z-index: 1;
  pointer-events: none;
}

.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
  contain: layout;
}

:deep(#tsparticles) {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  overflow: hidden !important;
  pointer-events: auto !important;
  z-index: 1 !important;
}

:deep(#tsparticles canvas) {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  display: block !important;
}

.bg-helicopter-overlay {
  position: absolute;
  top: 7px;
  left: 0;
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
  z-index: 2;
  pointer-events: none;
}

.bg-helicopter {
  position: absolute;
  top: 90px;
  left: 490px;
  width: 68%;
  height: 80%;
  object-fit: cover;
  z-index: 2;
  filter: grayscale(100%);
  pointer-events: none;
}

.water-wave {
  filter: url(#waterWaveFilter);
  left: 8px;
}

.visually-hidden {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
}

.helicopter-landing {
  animation: helicopterLanding 2.5s ease-in-out forwards;
}

@keyframes helicopterLanding {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  85% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

.bg-image-overlay-1 {
  position: absolute;
  bottom: -20%;
  left: -5%;
  width: 25%;
  height: auto;
  filter: blur(7.05px);
  opacity: 0.6;
  z-index: 4;
}

.bg-image-overlay-2 {
  position: absolute;
  top: 70%;
  left: -2%;
  width: 18%;
  height: auto;
  animation: float 6s ease-in-out infinite;
  z-index: 4;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
    opacity: 0.6;
  }

  50% {
    transform: translateY(-30px);
    opacity: 0.8;
  }
}

.bottom-right-triangle {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 130px;
  background: rgb(31,
      31,
      31);
  z-index: 4;
  pointer-events: none;
  clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 100%);
}

.hero-section {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: calc(100vh - 120px);
  max-width: 100%;
  margin: 0;
  /* padding: 0 8%; */
  padding: 120px 8% 80px;
  top: 90px;
}

.hero-left {
  flex: 0 0 auto;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.title-box {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
}

.bracket {
  color: #DCC62D;
  font-family: 'Manrope', sans-serif;
  font-size: 84px;
  font-weight: 800;
  line-height: 1;
  flex-shrink: 0;
  margin-top: 0.1em;
}

.bracket-animate {
  animation: bracketPulse 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s forwards;
  opacity: 0;
}

@keyframes bracketPulse {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }

  60% {
    opacity: 1;
    transform: scale(1.1);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.hero-title {
  color: #DCC62D;
  font-family: 'Manrope', sans-serif;
  font-size: 50px;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: 1.8px;
  margin-top: 0;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.93);
}

.title-animate {
  animation: militaryTextScan 1.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards;
  opacity: 0;
}

@keyframes militaryTextScan {
  0% {
    opacity: 0;
    transform: translateY(40px) scaleY(0.3) scaleX(0.8);
    clip-path: inset(100% 0% 0% 0%);
    text-shadow: -3px 0 0 #DCC62D, 3px 0 0 rgba(220, 198, 45, 0.3);
  }

  30% {
    opacity: 0.7;
    clip-path: inset(50% 0% 0% 0%);
    text-shadow: -2px 0 0 #DCC62D, 2px 0 0 rgba(220, 198, 45, 0.4);
  }

  60% {
    opacity: 1;
    transform: translateY(0) scaleY(1.05) scaleX(1);
    clip-path: inset(0% 0% 0% 0%);
    text-shadow: -1px 0 0 #DCC62D, 1px 0 0 rgba(220, 198, 45, 0.2);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scaleY(1) scaleX(1);
    clip-path: inset(0% 0% 0% 0%);
    text-shadow: none;
  }
}

.hero-subtitle {
  color: #DCC62D;
  font-family: 'Manrope', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.6;
  margin: 0;
}

.subtitle-animate {
  animation: subtitleReveal 1.5s ease-out 1.2s forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes subtitleReveal {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-description {
  color: #FFF;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  margin: 0;
  max-width: 520px;
}

.description-animate {
  animation: textGlitch 1.6s ease-out 1.5s forwards;
  opacity: 0;
}

@keyframes textGlitch {
  0% {
    opacity: 0;
    transform: translateX(-10px);
    text-shadow: -2px 0 #DCC62D;
  }

  50% {
    text-shadow: 2px 0 #DCC62D, -2px 0 rgba(220, 198, 45, 0.5);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
    text-shadow: none;
  }
}

@media (max-width: 1200px) {
  .navbar {
    padding: 1.5rem 5%;
  }

  .nav-center {
    gap: 2rem;
  }

  .nav-center a {
    font-size: 16px;
  }

  .hero-section {
    padding: 0 5%;
  }

  .hero-title {
    font-size: 48px;
  }

  .bracket {
    font-size: 70px;
  }

  .bottom-right-triangle {
    height: 350px;
  }

}

@media (max-width: 1024px) {
  .hero-section {
    padding: 0 4%;
  }

  .hero-left {
    max-width: 100%;
  }

  .hero-title {
    font-size: 40px;
  }

  .bracket {
    font-size: 60px;
  }

  .bottom-right-triangle {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .navbar {
    flex-wrap: wrap;
    padding: 1rem 4%;
    gap: 1rem;
  }

  .navbar-logo {
    width: 110px;
  }

  .nav-center {
    flex-basis: 100%;
    order: 3;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav-center a {
    font-size: 14px;
  }

  .navbar-user-icon {
    width: 28px;
    height: 28px;
  }

  .hero-section {
    padding: 0 4%;
  }

  .title-box {
    margin-bottom: 0.5rem;
  }

  .hero-title {
    font-size: 32px;
    letter-spacing: 1px;
  }

  .bracket {
    font-size: 50px;
  }

  .hero-subtitle {
    font-size: 18px;
  }

  .hero-description {
    font-size: 14px;
  }

  .btn-book-now {
    width: 100%;
    max-width: 280px;
    height: 50px;
    font-size: 16px;
  }

  .bottom-right-triangle {
    height: 250px;
  }

}

@media (max-width: 480px) {
  .navbar {
    padding: 0.8rem 3%;
  }

  .navbar-logo {
    width: 90px;
  }

  .nav-center {
    gap: 1rem;
  }

  .nav-center a {
    font-size: 12px;
  }

  .hero-section {
    padding: 0 3%;
  }

  .hero-title {
    font-size: 26px;
    line-height: 1.2;
  }

  .bracket {
    font-size: 40px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .hero-description {
    font-size: 13px;
    line-height: 1.5;
  }

  .btn-book-now {
    width: 100%;
    height: 48px;
    font-size: 15px;
  }

  .bottom-right-triangle {
    height: 200px;
  }

}
</style>