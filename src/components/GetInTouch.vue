<template>
    <div class="showreel" ref="showreelElement">
        <div class="bg-aerial-image">
            <img class="bg-aerial-img" :class="{ 'cinematic-loaded': isDroneVisible }"
                src="https://api.builder.io/api/v1/image/assets/TEMP/3c12ed418dea13ea3e7db4992dc1d1f372d72eed?width=4236"
                alt="" />
        </div>
        <div class="bg-overlay"></div>

        <div class="geo-shape left-top-geo">
            <img src="@/assets/getintouch/bg-geometric-1.png" alt="" />
        </div>
        <div class="geo-shape right-bottom-geo">
            <img src="@/assets/getintouch/bg-geometric-2.png" alt="" />
        </div>

        <div class="contact-wrap">
            <ElectricBorder :color="'#d9b200'" :speed="1" :chaos="1" :thickness="4" :className="'intro-border'"
                :style="{ borderRadius: '12px' }">
                <div class="intro-frame">
                    <div class="intro-inner">
                        <p class="kicker">BOOK A FLIGHT OR REQUEST A QUOTE</p>
                        <h2 class="intro-title">GET IN TOUCH</h2>
                        <p class="intro-copy">
                            Tell us about your project and our operations team will respond with availability, a
                            suggested
                            platform and a tailored quote
                        </p>
                    </div>
                </div>
            </ElectricBorder>

            <div class="form-card">
                <form @submit.prevent="submitForm" class="form-grid">
                    <div class="field">
                        <label>Name*</label>
                        <input v-model="form.name" type="text" required />
                    </div>
                    <div class="field">
                        <label>Company / Organisation</label>
                        <input v-model="form.company" type="text" />
                    </div>

                    <div class="field">
                        <label>Phone*</label>
                        <input v-model="form.phone" type="tel" required />
                    </div>
                    <div class="field">
                        <label>Email*</label>
                        <input v-model="form.email" type="email" required />
                    </div>

                    <div class="field select">
                        <label>Service Required</label>
                        <select v-model="form.service">
                            <option value="" disabled>Select a service</option>
                            <option>Helicopter Rental & Charter</option>
                            <option>Aerial Filming & Photography</option>
                            <option>Surveying & Inspection</option>
                            <option>3D Mapping & Modelling</option>
                        </select>
                    </div>
                    <div class="field">
                        <label>Preferred Date & Location</label>
                        <input v-model="form.dateLocation" type="text" placeholder="e.g., 2026-01-20, Colombo" />
                    </div>

                    <div class="field full">
                        <label>Message</label>
                        <textarea v-model="form.message" rows="3"></textarea>
                    </div>

                    <div class="actions full">
                        <button type="submit" class="submit-btn">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SectionLabel from './SectionLabel.vue'
import ElectricBorder from '@/components/UI/ElectricBorder.vue'

const showreelElement = ref(null)
const isDroneVisible = ref(false)
const thumbnailSwapped = ref(false)
let lastScrollY = 0
let scrollThreshold = 200

const form = ref({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: '',
    dateLocation: '',
    message: ''
})

const submitForm = () => {
    console.log('Form submitted', form.value)
}
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
    }, { threshold: 0.2 })

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
    min-height: 120vh;
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

.geo-shape {
    position: absolute;
    z-index: 2;
    pointer-events: none;
}

/* Floating animations for geometric shapes */
@keyframes floatUpDownGeo {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

@keyframes floatUpDownGeoRotated {

    0%,
    100% {
        transform: translateY(0) rotate(-8deg);
    }

    50% {
        transform: translateY(-10px) rotate(-8deg);
    }
}

.geo-shape img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
}

.left-top-geo {
    left: -140px;
    top: -100px;
    width: 420px;
    animation: floatUpDownGeo 3s ease-in-out infinite;
}

.right-bottom-geo {
    right: 1px;
    bottom: -80px;
    width: 420px;
    transform: rotate(-8deg);
    animation: floatUpDownGeoRotated 3s ease-in-out infinite 0.75s;
}

.contact-wrap {
    position: relative;
    z-index: 3;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 20px 5%;
    left: 60px;
}

.intro-border {
    width: 350px;
}

@media (min-width: 768px) {
    .intro-border {
        width: 425px;
    }
}

@media (max-width: 640px) {
    .contact-wrap {
        left: 0;
        padding: 40px 16px;
    }

    .intro-frame {
        width: 100%;
        height: auto;
        padding: 24px 20px 80px;
    }

    .form-card {
        position: relative;
        top: -40px;
        left: 0;
        width: 100%;
        height: auto;
    }

    .form-grid {
        grid-template-columns: 1fr;
        gap: 16px;
        padding: 24px 20px;
    }
}

.intro-frame {
    position: relative;
    width: 100%;
    height: 650px;
    border: none;
    padding: 36px 32px 120px;
    bottom: -10px;
    background: rgba(0, 0, 0, 0.15);
}

.intro-inner {
    max-width: 420px;
}

.kicker {
    color: #d9b200;
    font-family: Manrope, sans-serif;
    font-size: 14px;
    margin: 0 0 8px;
    letter-spacing: .02em;
}

.intro-title {
    color: #fff;
    font-family: Oswald, sans-serif;
    font-size: 54px;
    line-height: 1.1;
    margin: 0 0 10px;
    text-transform: uppercase;
}

.intro-copy {
    color: #e5e5e5;
    font-family: Manrope, sans-serif;
    font-size: 15px;
    line-height: 1.6;
    margin: 0;
}

.form-card {
    position: absolute;
    left: 110px;
    bottom: 40px;
    width: min(840px, 60%);
    height: 380px;
    background: #0f0f0f;
    border: 5px solid #ffffff8c;
    box-shadow: 0 18px 24px rgba(0, 0, 0, 0.6);
}

.form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px 32px;
    padding: 30px 36px 28px;
}

.field {
    display: flex;
    flex-direction: column;
    gap: 1px;
}

.field.full {
    grid-column: 1 / -1;
}

.field label {
    color: #d9b200;
    font-family: Manrope, sans-serif;
    font-size: 14px;
}

.field input,
.field select,
.field textarea {
    background: transparent;
    border: none;
    border-bottom: 1px solid #3a3a3a;
    padding: 10px 0 -20px;
    color: #fff;
    font-family: Manrope, sans-serif;
    font-size: 12px;
    outline: none;
}

.field select {
    appearance: none;
}

.actions {
    grid-column: 2 / 3;
    display: flex;
    justify-content: flex-end;
}

.submit-btn {
    background: #d9b200;
    color: #000;
    font-family: Oswald, sans-serif;
    font-weight: 700;
    letter-spacing: .02em;
    border: none;
    padding: 12px 28px;
    cursor: pointer;
    width: 150px;
}

.submit-btn:hover {
    filter: brightness(1.05);
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
    bottom: 0;
    left: 0;
    width: 400px;
    height: auto;
    object-fit: contain;
    z-index: 2;
    opacity: 0.8;
    pointer-events: none;
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
    background: rgba(0, 0, 0, 0.747);
    z-index: 2;
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
    .form-card {
        left: 260px;
        width: min(720px, 74%);
    }

    .drone-image {
        height: 250px;
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
    .contact-wrap {
        padding: 70px 5%;
        left: 0;
    }

    .intro-frame {
        width: 100%;
    }

    .form-card {
        position: relative;
        left: 0;
        top: -80px;
        width: 100%;
    }

    .video-section {
        max-width: 100%;
        width: 100%;
    }

    .form-grid {
        grid-template-columns: 1fr 1fr;
    }

    .section-title {
        font-size: 38px;
    }
}

@media (max-width: 768px) {
    .intro-frame {
        width: 100%;
        padding: 28px 24px 100px;
    }

    .form-card {
        top: -70px;
    }

    .form-grid {
        grid-template-columns: 1fr;
    }

    .drone-image {
        height: 200px;
        top: 3%;
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
        position: relative;
        width: 100vw;
        height: 100vh;
    }

    .contact-wrap {
        padding: 56px 16px;
        bottom: -140px;
    }

    .intro-title {
        font-size: 40px;
    }

    .form-card {
        top: -370px;
        height: 500px;
        width: 90%;
        margin: 0 auto;
        position: relative;
    }

    .drone-image {
        height: 150px;
        top: 2%;
    }

    .geometric-pattern {
        width: 220px;
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

    .form-grid {
        grid-template-columns: 1fr;
        gap: 10px;
        height: 200px;
    }

    .actions {
        grid-column: 1 / -1;
        justify-content: flex-end;
    }

    .intro-frame {
        position: relative;
        border: none;
        padding: 36px 32px 120px;
        bottom: -10px;
        background: rgba(0, 0, 0, 0.15);
    }
}
</style>
