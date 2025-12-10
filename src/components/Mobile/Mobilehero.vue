<template>
    <div class="hero-wrapper" ref="heroRef">
        <div class="hero-background">
            <!-- SVG filter defs for interactive water-like wave -->
            <svg class="visually-hidden" width="0" height="0" aria-hidden="true" focusable="false">
                <filter id="waterWaveFilter">
                    <feTurbulence id="waveTurb" type="fractalNoise" baseFrequency="0.008 0.02" numOctaves="2"
                        seed="7" />
                    <feDisplacementMap id="waveDisp" in="SourceGraphic" scale="18" xChannelSelector="R"
                        yChannelSelector="G" />
                </filter>
            </svg>
            <div id="tsparticles" class="particles-container"></div>
            <img class="bg-helicopter-overlay1 water-wave"
                src="https://cdn.builder.io/api/v1/image/assets%2Ff290de50bb23438081b567faae887dbc%2F729cf7c6f1134dd6bbed2a98a7ab5f73?format=webp&width=800"
                alt="Helicopter" />
            <img class="bg-helicopter-overlay helicopter-landing"
                src="https://cdn.builder.io/api/v1/image/assets%2F7d4dc6c18bb44bf38d1786568767e08e%2F2958c5523a254e4e862130966c54ea62?format=webp&width=800"
                alt="Helicopter" />
            <div class="blur-background-overlay"></div>
            <img class="bg-image-overlay-1"
                src="https://api.builder.io/api/v1/image/assets/TEMP/d924db34fa0bd87939ee320874555174aade0a21?width=648"
                alt="" />
            <img class="bg-image-overlay-2"
                src="https://api.builder.io/api/v1/image/assets/TEMP/00da309db929fb12a1cff1a8644132770534426b?width=412"
                alt="" />
            <!-- <div class="bottom-right-triangle"></div> -->
        </div>

        <nav class="navbar">
            <img class="navbar-logo"
                src="@/assets/hero/Nav_logo.png"
                alt="Delta Helicopters" />

            <button class="hamburger" @click="isMenuOpen = !isMenuOpen" aria-label="Open menu"
                :aria-expanded="isMenuOpen ? 'true' : 'false'">
                <span></span><span></span><span></span>
            </button>

            <Teleport to="body">
                <div class="drawer" :class="{ open: isMenuOpen }" @click.self="isMenuOpen = false">
                    <div class="drawer-panel">
                        <div class="drawer-header">
                            <img class="drawer-logo"
                                src="https://api.builder.io/api/v1/image/assets/TEMP/4a29e3443cdf0359763cb1de98787f1a6ad707a2?width=368"
                                alt="Delta Helicopters" />
                            <button class="close-btn" @click="isMenuOpen = false" aria-label="Close menu">×</button>
                        </div>
                        <ul class="drawer-links">
                            <li><a href="#home" @click="isMenuOpen = false">Home</a></li>
                            <li><a href="#fleet" @click="isMenuOpen = false">Fleet</a></li>
                            <li><a href="#services" @click="isMenuOpen = false">Services</a></li>
                            <li><a href="#portfolio" @click="isMenuOpen = false">Portfolio</a></li>
                            <li><a href="#testimonials" @click="isMenuOpen = false">Testimonials</a></li>
                            <li><a href="#getintouch" @click="isMenuOpen = false">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </Teleport>
        </nav>

        <div class="hero-section">
            <div class="hero-left">
                <div class="title-box">
                    <!-- <span class="bracket bracket-animate">[</span> -->
                    <h1 class="hero-title title-animate">[ PREMIUM AERIAL SERVICES ]</h1>
                    <!-- <span class="bracket bracket-animate">]</span> -->
                </div>

                <h2 class="hero-subtitle subtitle-animate">
                    Helicopter & Drone Hire for Film, Surveying & 3D Mapping
                </h2>

                <p class="hero-description description-animate">
                    Delta helicopters provides professional helicopter and drone operations for production companies,
                    engineers,
                    surveyors and agencies. From cinematic aerial shots to precision 3D mapping, our licensed pilots
                    deliver safe,
                    reliable and efficient missions.
                </p>

                <PrimaryButton class="mobile-primary-btn">Book Now</PrimaryButton>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import PrimaryButton from '../buttons/PrimaryButton.vue'

const heroRef = ref(null)
const isMenuOpen = ref(false)

watch(isMenuOpen, (newVal) => {
    if (newVal) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
})

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
        t += 0.015
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
    document.body.style.overflow = ''
    if (rafId) cancelAnimationFrame(rafId)
    window.removeEventListener('mousemove', onMouseMove)
})
</script>

<style scoped>
.bottom-right-triangle {
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 130px;
    background: rgb(31,
        31,
        31);
    z-index: 4;
    pointer-events: none;
    clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 90%);
}

.hero-wrapper {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: #181818;
    z-index: 1;
    isolation: isolate;
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
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 2;
    pointer-events: none;
}

.bg-helicopter-overlay1 {
    position: absolute;
    top: 20px;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 2;
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

.blur-background-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(8px);
    z-index: 1;
    pointer-events: none;
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
    width: 24%;
    height: auto;
    animation: float 6s ease-in-out infinite;
    z-index: 1;
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

.navbar {
    position: relative;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 2rem 6%;
    gap: 2rem;
}

.hamburger {
    background: transparent;
    border: none;
    width: 38px;
    height: 28px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2px 0;
    cursor: pointer;
    font-weight: 800;
}

.hamburger span {
    display: block;
    height: 3px;
    background: #DCC62D;
    border-radius: 2px;
}

.drawer {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    pointer-events: none;
    transition: opacity .25s ease;
    z-index: 999;
}

.drawer.open {
    opacity: 1;
    pointer-events: auto;
}

.drawer-panel {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 100%;
    /* max-width: 360px; */
    background: #101010;
    border-left: 2px solid #DCC62D;
    transform: translateX(100%);
    transition: transform .3s ease;
    padding: 28px 35px 24px;
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.drawer.open .drawer-panel {
    transform: translateX(0);
}

.drawer-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.drawer-logo {
    width: 120px;
    height: auto;
}

.close-btn {
    background: transparent;
    border: none;
    color: #fff;
    font-size: 28px;
    line-height: 1;
    cursor: pointer;
}

.drawer-links {
    list-style: none;
    padding: 8px 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 14px;
     margin-top: 30px;
}

.drawer-links a {
    color: #fff;
    text-decoration: none;
    font-family: Oswald, sans-serif;
    font-size: 16px;
    letter-spacing: .5px;
}

.drawer-links a:hover {
    color: #DCC62D;
}

.drawer-cta {
    margin-top: auto;
    background: #DCC62D;
    color: #000;
    border: none;
    padding: 12px 16px;
    font-family: Oswald, sans-serif;
    font-weight: 700;
}

.navbar-logo {
    width: 140px;
    height: auto;
    flex-shrink: 0;
}

.nav-center {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    flex: 1;
}

.nav-center a {
    color: #FFF;
    font-family: 'Oswald', sans-serif;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.9px;
    text-transform: uppercase;
    text-decoration: none;
    transition: color 0.3s ease;
    white-space: nowrap;
}

.nav-center a:hover {
    color: #DCC62D;
}

.navbar-user-icon {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    cursor: pointer;
}

.hero-section {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: calc(75vh - 120px);
    max-width: 100%;
    margin-top: 20px;
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
    gap: 1rem;
    margin-bottom: 1rem;
}

.bracket {
    color: #DCC62D;
    font-family: 'Manrope', sans-serif;
    font-size: 80px;
    font-weight: 800;
    line-height: 1;
    flex-shrink: 0;
    margin-top: 0.2em;
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
    font-size: 10px;
    font-weight: 500;
    margin: 0;
    white-space: nowrap;
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
    font-size: 17px;
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
        justify-content: center;
        /* center the whole line */
        align-items: center;
    }

    .bracket {
        font-size: 50px;
    }

    .hero-subtitle {
        font-size: 17px;
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

}

@media (max-width: 480px) {
    .navbar {
        padding: 2rem 6%;
    }

    .navbar-logo {
        width: 100px;
    }

    .nav-center {
        gap: 1rem;
    }

    .nav-center a {
        font-size: 12px;
    }

    .hero-section {
        padding: 0 8%;
        top: -90px
    }

    .hero-title {
        font-size: 23px;
        line-height: 1.2;
        font-weight: 600;
        margin: 0;
        white-space: nowrap;
    }

    .bracket {
        font-size: 40px;
    }

    .hero-subtitle {
        font-size: 15px;
    }

    .hero-description {
        font-size: 16px;
    }

    .btn-book-now {
        width: 50px;
        height: 48px;
        font-size: 15px;
    }

    .mobile-primary-btn {
        top: 8px;
        display: inline-flex;
        width: 190px;
        height: 40px;
        justify-content: center;
        margin-top: 10px;
    }

    .hero-left .mobile-primary-btn {
        align-self: flex-start;
    }

    .helicopter-landing {
        width: 200%;
        left: -210px;
        height: 100%;
        top: -80px;
        object-fit: contain;
        object-position: center bottom;
    }

    .water-wave {
        filter: url(#waterWaveFilter);
        top: -1px;
        left: -380px;
        width: 210%;
    }

    .hero-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: #181818;
        z-index: 1;
        isolation: isolate;
    }
}
</style>